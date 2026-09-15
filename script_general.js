(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"watermark":false,"id":"rootPlayer","scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setLocale":TDV.Tour.Script.setLocale,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"clone":TDV.Tour.Script.clone,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"openLink":TDV.Tour.Script.openLink,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setValue":TDV.Tour.Script.setValue,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPixels":TDV.Tour.Script.getPixels,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"unloadViewer":TDV.Tour.Script.unloadViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"disableVR":TDV.Tour.Script.disableVR,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"enableVR":TDV.Tour.Script.enableVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"init":TDV.Tour.Script.init,"toggleVR":TDV.Tour.Script.toggleVR,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"initQuiz":TDV.Tour.Script.initQuiz,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMapLocation":TDV.Tour.Script.setMapLocation,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"registerKey":TDV.Tour.Script.registerKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"existsKey":TDV.Tour.Script.existsKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"downloadFile":TDV.Tour.Script.downloadFile,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"createTween":TDV.Tour.Script.createTween,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showWindowBase":TDV.Tour.Script.showWindowBase,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showWindow":TDV.Tour.Script.showWindow,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"translate":TDV.Tour.Script.translate,"getMainViewer":TDV.Tour.Script.getMainViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"textToSpeech":TDV.Tour.Script.textToSpeech,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"getOverlays":TDV.Tour.Script.getOverlays},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"locales":{"pt":"locale/pt.txt"},"history":{},"defaultLocale":"pt","name":"Player741","textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false},"displayTooltipInTouchScreens":true},"xrPanelsEnabled":true,"start":"this.init(); this.playAudioList([this.audio_B1932BC8_A5FC_7D8F_41E0_90E447F8D6F9], true)","gap":10,"backgroundColorRatios":[0],"class":"Player","propagateClick":false,"layout":"absolute","minWidth":0,"minHeight":0,"height":"100%","scrollBarColor":"#000000","width":"100%","hash": "c0cd4e3e7e42f8f9eec845eae3a2dab0f7bc13bbe1eac54910cc98000abdd970", "definitions": [{"playbackBarHeadWidth":6,"width":"100%","height":"100%","subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","toolTipFontColor":"#606060","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":"33%","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadow":true,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingTop":4,"progressBorderSize":0,"progressBarBorderSize":0,"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"class":"ViewerArea","propagateClick":false,"playbackBarHeight":10,"progressHeight":2,"minHeight":50,"toolTipPaddingLeft":6,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"minWidth":100,"progressBorderRadius":2,"firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarProgressBorderRadius":0,"subtitlesFontFamily":"Arial","toolTipFontSize":"1.11vmin","playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"subtitlesBottom":50,"playbackBarHeadShadowOpacity":0.7,"doubleClickAction":"none"},{"class":"MediaAudio","data":{"label":"Ave Maria"},"audio":"this.audiores_B1D2CC08_A5E4_1A8F_41D4_E034D08D5208","id":"audio_B66363E9_A5FC_0D81_41D4_CE0BCC9FFFAD","autoplay":true},{"class":"Panorama","thumbnailUrl":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_t.jpg","hfov":360,"vfov":180,"overlays":["this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_tcap0","this.overlay_B6F113AD_A5FC_0D81_41C3_A354D4F6B2AC"],"id":"panorama_A969467D_A5E4_F680_41D9_18CED820ABF0","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_t.webp","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":5,"height":5120,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/0/{row}_{column}.webp","colCount":30,"tags":"ondemand","width":30720},{"class":"TiledImageResourceLevel","rowCount":3,"height":3072,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/1/{row}_{column}.webp","colCount":18,"tags":"ondemand","width":18432},{"class":"TiledImageResourceLevel","rowCount":2,"height":2048,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/2/{row}_{column}.webp","colCount":12,"tags":"ondemand","width":12288},{"class":"TiledImageResourceLevel","rowCount":1,"height":1024,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/3/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"width":6144}]}}],"hfovMax":130,"data":{"label":"IMG_20260915_075736_00_054"},"label":trans('panorama_A969467D_A5E4_F680_41D9_18CED820ABF0.label')},{"class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"aaEnabled":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"class":"MediaAudio","data":{"label":"Quando homens se re\u00fanem em ora\u00e7\u00e3o\u2026"},"audio":"this.audiores_B1DA1F42_A5E4_1683_41CB_EC93305A5F05","id":"audio_B1932BC8_A5FC_7D8F_41E0_90E447F8D6F9","autoplay":true},{"class":"PanoramaCamera","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","targetStereographicFactor":0,"targetPitch":0,"duration":5000,"targetHfov":120}],"automaticZoomSpeed":0,"initialPosition":{"class":"PanoramaCameraPosition","hfov":120,"pitch":0,"yaw":0},"manualZoomSpeed":0,"initialSequence":"this.sequence_AEC619E4_A5E4_1D80_41D5_6A4298B2222B","id":"panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_camera","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","hfov":165,"stereographicFactor":1,"pitch":-90,"yaw":0},"enterPointingToHorizon":true},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_camera","media":"this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}]},{"class":"AudioResource","url":trans('audiores_B1D2CC08_A5E4_1A8F_41D4_E034D08D5208.url'),"id":"audiores_B1D2CC08_A5E4_1A8F_41D4_E034D08D5208"},{"class":"TripodCapPanoramaOverlay","distance":50,"inertia":true,"hfov":21,"id":"panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_tcap0","image":"this.res_B78D00C5_A5FC_0B81_41DA_9BA533CDF319"},{"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_B6792423_A5FC_0A80_41C2_660C812C2117"],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"yaw":-63.5,"pitch":-5.34,"scaleMode":"fit_inside","hfov":7.2,"vfov":8.59,"image":"this.AnimatedImageResource_B2D0494F_A61C_1A80_41CD_D604A9F0D250","data":{"label":"Transparent_2_audio_off"}}],"maps":[],"data":{"label":"Transparent_2_audio_off"},"enabledInVR":true,"useHandCursor":true,"id":"overlay_B6F113AD_A5FC_0D81_41C3_A354D4F6B2AC"},{"class":"AudioResource","url":trans('audiores_B1DA1F42_A5E4_1683_41CB_EC93305A5F05.url'),"id":"audiores_B1DA1F42_A5E4_1683_41CB_EC93305A5F05"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AEC619E4_A5E4_1D80_41D5_6A4298B2222B"},{"class":"ImageResource","id":"res_B78D00C5_A5FC_0B81_41DA_9BA533CDF319","levels":[{"class":"ImageResourceLevel","height":1024,"url":"media/res_B78D00C5_A5FC_0B81_41DA_9BA533CDF319_0.webp","width":1024}]},{"class":"HotspotPanoramaOverlayArea","click":"this.executeAudioAction([this.audio_B66363E9_A5FC_0D81_41D4_CE0BCC9FFFAD],'play',this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0,true,true,false)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_B6792423_A5FC_0A80_41C2_660C812C2117","mapColor":"any","toolTip":trans('HotspotPanoramaOverlayArea_B6792423_A5FC_0A80_41C2_660C812C2117.toolTip')},{"class":"AnimatedImageResource","rowCount":7,"frameDuration":33,"colCount":7,"frameCount":49,"finalFrame":"first","levels":[{"class":"ImageResourceLevel","height":840,"url":"media/res_B1E7C436_A5E4_0A83_41E4_66AFDD9691F4_0.webp","width":840}],"id":"AnimatedImageResource_B2D0494F_A61C_1A80_41CD_D604A9F0D250"}],"defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Tue Sep 15 2026