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
var script = {"xrPanelsEnabled":true,"watermark":false,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","name":"Player741","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false},"history":{}},"scripts":{"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"clone":TDV.Tour.Script.clone,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMapLocation":TDV.Tour.Script.setMapLocation,"openLink":TDV.Tour.Script.openLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setValue":TDV.Tour.Script.setValue,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getKey":TDV.Tour.Script.getKey,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"existsKey":TDV.Tour.Script.existsKey,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"startMeasurement":TDV.Tour.Script.startMeasurement,"playAudioList":TDV.Tour.Script.playAudioList,"getPixels":TDV.Tour.Script.getPixels,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showWindowBase":TDV.Tour.Script.showWindowBase,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"disableVR":TDV.Tour.Script.disableVR,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"enableVR":TDV.Tour.Script.enableVR,"init":TDV.Tour.Script.init,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleVR":TDV.Tour.Script.toggleVR,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeJS":TDV.Tour.Script.executeJS,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"unloadViewer":TDV.Tour.Script.unloadViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"createTween":TDV.Tour.Script.createTween,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"downloadFile":TDV.Tour.Script.downloadFile,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowScore":TDV.Tour.Script.quizShowScore,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizStart":TDV.Tour.Script.quizStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getMainViewer":TDV.Tour.Script.getMainViewer,"translate":TDV.Tour.Script.translate,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera},"start":"this.playAudioList([this.audio_B1932BC8_A5FC_7D8F_41E0_90E447F8D6F9], true); this.init()","gap":10,"backgroundColorRatios":[0],"propagateClick":false,"minWidth":0,"minHeight":0,"class":"Player","scrollBarColor":"#000000","height":"100%","layout":"absolute","hash": "8ab6b0a561e7cf3adf55d727d72e701880a2e546e876aa5531dcf3130dd01c26", "definitions": [{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_camera"}],"class":"PlayList"},{"data":{"label":"Quando homens se re\u00fanem em ora\u00e7\u00e3o\u2026"},"class":"MediaAudio","audio":"this.audiores_B1DA1F42_A5E4_1683_41CB_EC93305A5F05","id":"audio_B1932BC8_A5FC_7D8F_41E0_90E447F8D6F9","autoplay":true},{"automaticZoomSpeed":0,"initialPosition":{"pitch":0,"hfov":120,"class":"PanoramaCameraPosition","yaw":0},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":5000,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetPitch":0,"targetStereographicFactor":0,"targetHfov":120}],"class":"PanoramaCamera","initialSequence":"this.sequence_AEC619E4_A5E4_1D80_41D5_6A4298B2222B","displayOriginPosition":{"pitch":-90,"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":0,"stereographicFactor":1},"id":"panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_camera","manualZoomSpeed":0,"enterPointingToHorizon":true},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation"},{"subtitlesTextShadowVerticalLength":1,"height":"100%","doubleClickAction":"none","toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"class":"ViewerArea","subtitlesTextShadowOpacity":1,"progressRight":"33%","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadow":true,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingTop":4,"progressBorderSize":0,"progressBarBorderSize":0,"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"firstTransitionDuration":0,"propagateClick":false,"playbackBarHeight":10,"progressHeight":2,"minHeight":50,"playbackBarProgressBorderSize":0,"minWidth":100,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"playbackBarHeadWidth":6,"progressBorderRadius":2,"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarRight":0,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColorDirection":"vertical","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"width":"100%","playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial"},{"data":{"label":"Ave Maria"},"class":"MediaAudio","audio":"this.audiores_B1D2CC08_A5E4_1A8F_41D4_E034D08D5208","id":"audio_B66363E9_A5FC_0D81_41D4_CE0BCC9FFFAD","autoplay":true},{"thumbnailUrl":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_t.jpg","hfov":360,"class":"Panorama","vfov":180,"overlays":["this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_tcap0","this.overlay_B6F113AD_A5FC_0D81_41C3_A354D4F6B2AC"],"id":"panorama_A969467D_A5E4_F680_41D9_18CED820ABF0","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_t.webp","cube":{"levels":[{"rowCount":5,"height":5120,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/0/{row}_{column}.webp","colCount":30,"class":"TiledImageResourceLevel","tags":"ondemand","width":30720},{"rowCount":3,"height":3072,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/1/{row}_{column}.webp","colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand","width":18432},{"rowCount":2,"height":2048,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/2/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","width":12288},{"rowCount":1,"height":1024,"url":"media/panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_0/{face}/3/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":6144}],"class":"ImageResource"}}],"hfovMax":130,"data":{"label":"IMG_20260915_075736_00_054"},"label":trans('panorama_A969467D_A5E4_F680_41D9_18CED820ABF0.label')},{"class":"AudioResource","url":trans('audiores_B1DA1F42_A5E4_1683_41CB_EC93305A5F05.url'),"id":"audiores_B1DA1F42_A5E4_1683_41CB_EC93305A5F05"},{"class":"PanoramaCameraSequence","id":"sequence_AEC619E4_A5E4_1D80_41D5_6A4298B2222B","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"class":"AudioResource","url":trans('audiores_B1D2CC08_A5E4_1A8F_41D4_E034D08D5208.url'),"id":"audiores_B1D2CC08_A5E4_1A8F_41D4_E034D08D5208"},{"distance":50,"inertia":true,"hfov":21,"class":"TripodCapPanoramaOverlay","id":"panorama_A969467D_A5E4_F680_41D9_18CED820ABF0_tcap0","image":"this.res_B78D00C5_A5FC_0B81_41DA_9BA533CDF319"},{"areas":["this.HotspotPanoramaOverlayArea_B6792423_A5FC_0A80_41C2_660C812C2117"],"items":[{"pitch":-5.34,"distance":50,"yaw":-63.5,"scaleMode":"fit_inside","hfov":7.2,"class":"HotspotPanoramaOverlayImage","vfov":8.59,"image":"this.AnimatedImageResource_ABBCF241_A610_4494_41D4_271FF4C5295D","data":{"label":"Transparent_2_audio_off"}}],"maps":[],"data":{"label":"Transparent_2_audio_off"},"class":"HotspotPanoramaOverlay","enabledInVR":true,"useHandCursor":true,"id":"overlay_B6F113AD_A5FC_0D81_41C3_A354D4F6B2AC"},{"id":"res_B78D00C5_A5FC_0B81_41DA_9BA533CDF319","class":"ImageResource","levels":[{"height":1024,"url":"media/res_B78D00C5_A5FC_0B81_41DA_9BA533CDF319_0.webp","class":"ImageResourceLevel","width":1024}]},{"click":"this.executeAudioAction([this.audio_B66363E9_A5FC_0D81_41D4_CE0BCC9FFFAD],'play',this.panorama_A969467D_A5E4_F680_41D9_18CED820ABF0,true,true,false)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_B6792423_A5FC_0A80_41C2_660C812C2117","mapColor":"any","toolTip":trans('HotspotPanoramaOverlayArea_B6792423_A5FC_0A80_41C2_660C812C2117.toolTip')},{"id":"AnimatedImageResource_ABBCF241_A610_4494_41D4_271FF4C5295D","rowCount":7,"frameDuration":33,"colCount":7,"finalFrame":"first","levels":[{"height":840,"url":"media/res_B1E7C436_A5E4_0A83_41E4_66AFDD9691F4_0.webp","class":"ImageResourceLevel","width":840}],"class":"AnimatedImageResource","frameCount":49}],"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer"],"width":"100%"};
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