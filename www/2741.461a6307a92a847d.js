(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2741],{4294:(f,u,a)=>{"use strict";a.r(u),a.d(u,{PlaylistDetailsPageModule:()=>E});var d=a(177),r=a(9417),c=a(8974),m=a(3021),p=a(467),D=a(56),b=a(5301),t=a(4438),C=a(2904),O=a(7803),M=a(4254),v=a(5402);function x(n,s){1&n&&(t.j41(0,"div",3)(1,"div",4),t.EFF(2),t.nI1(3,"translate"),t.k0s()()),2&n&&(t.R7$(2),t.JRh(t.bMT(3,1,"Add content to the playlist")))}function G(n,s){if(1&n&&t.nrm(0,"img",15),2&n){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/Audio.png",t.B4B)}}function j(n,s){if(1&n&&t.nrm(0,"img",16),2&n){const e=t.XpG(2).$implicit;t.Y8G("appThumbnail",null==e?null:e.metaData)}}function T(n,s){if(1&n&&t.nrm(0,"img",15),2&n){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/Video.png",t.B4B)}}function $(n,s){if(1&n&&t.nrm(0,"img",15),2&n){const e=t.XpG(2).$implicit;t.Y8G("src",null!=e&&null!=e.metaData&&e.metaData.thumbnail&&!e.metaData.identifier.startsWith("do_")?null==e||null==e.metaData?null:e.metaData.thumbnail:"assets/images/PDF.png",t.B4B)}}function I(n,s){1&n&&t.nrm(0,"ion-icon",17)}function R(n,s){if(1&n){const e=t.RV6();t.j41(0,"div",7)(1,"div",8),t.bIt("click",function(){t.eBV(e);const l=t.XpG().$implicit,o=t.XpG();return t.Njj(o.playContent(l))}),t.DNE(2,G,1,1,"img",9)(3,j,1,1,"img",10)(4,T,1,1,"img",9)(5,$,1,1,"img",9),t.k0s(),t.j41(6,"div",11)(7,"div",12),t.EFF(8),t.k0s(),t.j41(9,"ion-buttons"),t.DNE(10,I,1,0,"ion-icon",13),t.j41(11,"ion-icon",14),t.bIt("click",function(){t.eBV(e);const l=t.XpG().$implicit,o=t.XpG();return t.Njj(o.moreOtions(l))}),t.k0s()()()()}if(2&n){const e=t.XpG().$implicit,i=t.XpG();t.R7$(2),t.Y8G("ngIf",(null==e||null==e.metaData?null:e.metaData.mimetype)===i.mimeType.AUDIO),t.R7$(),t.Y8G("ngIf",(null==e||null==e.metaData?null:e.metaData.mimetype)===i.mimeType.YOUTUBE&&!e.play),t.R7$(),t.Y8G("ngIf",(null==e||null==e.metaData?null:e.metaData.mimetype)===i.mimeType.MP4),t.R7$(),t.Y8G("ngIf",(null==e||null==e.metaData?null:e.metaData.mimetype)===i.mimeType.PDF),t.R7$(3),t.JRh(null==e.metaData?null:e.metaData.name),t.R7$(2),t.Y8G("ngIf","local"===e.source)}}function Y(n,s){if(1&n&&(t.j41(0,"div",5),t.DNE(1,R,12,6,"div",6),t.k0s()),2&n){const e=s.$implicit;t.R7$(),t.Y8G("ngIf",null==e?null:e.metaData)}}const X=[{path:"",component:(()=>{var n;class s{constructor(i,l,o,g){var h;this.router=i,this.headerService=l,this.modalCtrl=o,this.playlistService=g,this.playlists=[],this.mimeType=D.Cc,this.navigated=!1,this.headerEventSub=null;let P=null===(h=this.router.getCurrentNavigation())||void 0===h?void 0:h.extras;var y;P&&(this.playContentObject=null===(y=P.state)||void 0===y?void 0:y.playlist,this.playContentObject.playListcontentList.map(_=>{_.metaData=JSON.parse(_.content_metadata)}),this.playlists=this.playContentObject.playListcontentList,console.log("playlists",this.playlists))}ngOnInit(){this.headerService.showHeader(this.playContentObject.name,!0,["edit"]),this.headerService.headerEventEmitted$.subscribe(i=>{"edit"===i?this.router.navigate(["/create-playlist"],{state:{playlists:this.playContentObject,islocal:!0}}):"back"===i&&!this.navigated&&(this.navigated=!0,this.router.navigate(["/tabs/my-pitara"]))})}ionViewWillEnter(){this.navigated=!1,this.headerService.showHeader(this.playContentObject.name,!0,["edit"])}ngOnDestroy(){try{this.headerEventSub&&this.headerEventSub.unsubscribe()}catch(i){console.log("error in unsubscribe",i)}}playContent(i){var l=this;return(0,p.A)(function*(){yield l.router.navigate(["/player"],{state:{content:i}})})()}deletePlaylist(i){var l=this;return(0,p.A)(function*(){yield l.playlistService.deleteContentFromPlayList(l.playContentObject.identifier,[i.identifier]).then(o=>{l.getPlaylistContent()}).catch(o=>{console.log("err",o)})})()}getPlaylistContent(){var i=this;return(0,p.A)(function*(){yield i.playlistService.getPlayListContents(i.playContentObject.identifier).then(l=>{i.playlists=l,i.playlists.map(o=>{o.metaData=JSON.parse(o.content_metadata)}),i.playContentObject.playListcontentList=i.playlists})})()}moreOtions(i){var l=this;return(0,p.A)(function*(){const o=yield l.modalCtrl.create({component:b.J,cssClass:"add-to-pitara",breakpoints:[0,1],showBackdrop:!1,initialBreakpoint:1,handle:!1,handleBehavior:"none"});yield o.present(),o.onWillDismiss().then(g=>{g&&"delete"===g.data.type?l.deletePlaylist(i):g&&"edit"===g.data.type&&l.router.navigate(["/create-playlist"],{state:{playlists:l.playContentObject,islocal:!0}})})})()}}return(n=s).\u0275fac=function(i){return new(i||n)(t.rXU(m.Ix),t.rXU(C.Ux),t.rXU(c.W3),t.rXU(O.q))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-playlist-details"]],decls:3,vars:3,consts:[[3,"fullscreen"],["class","bot-section",4,"ngIf"],["class","cards-container",4,"ngFor","ngForOf"],[1,"bot-section"],[1,"bot-section__text"],[1,"cards-container"],["class","card",4,"ngIf"],[1,"card"],[1,"card__img",3,"click"],["alt","",3,"src",4,"ngIf"],["appThumbnail","","alt","",3,"appThumbnail",4,"ngIf"],[1,"card__metadata"],[1,"card__title"],["aria-hidden","true","class","icon-right","src","assets/icon/sd-card.svg",4,"ngIf"],["aria-hidden","true","src","assets/icon/kabab-icon.svg",1,"icon-left",3,"click"],["alt","",3,"src"],["appThumbnail","","alt","",3,"appThumbnail"],["aria-hidden","true","src","assets/icon/sd-card.svg",1,"icon-right"]],template:function(i,l){1&i&&(t.j41(0,"ion-content",0),t.DNE(1,x,4,3,"div",1)(2,Y,2,1,"div",2),t.k0s()),2&i&&(t.Y8G("fullscreen",!0),t.R7$(),t.Y8G("ngIf",!l.playlists.length),t.R7$(),t.Y8G("ngForOf",l.playlists))},dependencies:[d.Sq,d.bT,c.QW,c.W9,c.iq,M.g,v.D9],styles:[".cards-container[_ngcontent-%COMP%]{padding:.2rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{position:absolute;bottom:.625rem;color:var(--ion-color-primary-contrast);left:0;right:0;text-align:center}.card[_ngcontent-%COMP%]{position:relative;padding-bottom:1rem}.card__img[_ngcontent-%COMP%]{height:194px;width:100%;overflow:hidden}.card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100%;border-radius:1rem}.card__metadata[_ngcontent-%COMP%]{padding-top:.5rem;display:flex;align-items:center;justify-content:space-between}.card__metadata[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:1.75rem;width:1.75rem}.card__action-btns[_ngcontent-%COMP%]{display:flex;align-items:center}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:1rem}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:last-child{margin-left:auto;margin-right:0}.card__title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:400;width:90%;text-transform:capitalize;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.no-data[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--padding-top: 3.5rem }.landscape-icon[_ngcontent-%COMP%]{position:absolute;width:100%;background:transparent;bottom:3.5rem;z-index:9999;background:var(--ion-color-secondary-contrast);opacity:.5}.landscape-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{float:right;font-size:1.5rem;margin-right:.5rem}.icon-right[_ngcontent-%COMP%]{margin-right:10px}.icon-left[_ngcontent-%COMP%]{margin-left:10px}.bot-section__text[_ngcontent-%COMP%]{position:absolute;left:46%;right:0;top:16%;transform:translate(-50%,-50%);text-align:center;color:var(--ion-color-medium);font-size:.75rem}"]}),s})()}];let w=(()=>{var n;class s{}return(n=s).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[m.iI.forChild(X),m.iI]}),s})();var B=a(3721);let E=(()=>{var n;class s{}return(n=s).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[d.MD,r.YN,c.bv,w,v.h,B.h]}),s})()},5318:function(f){f.exports=function(a,d){if(null==d&&(d={fuzzy:!0}),/youtu\.?be/.test(a)){var r,c=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(r=0;r<c.length;++r)if(c[r].test(a))return c[r].exec(a)[1];if(d.fuzzy){var m=a.split(/[\/\&\?=#\.\s]/g);for(r=0;r<m.length;++r)if(/^[^#\&\?]{11}$/.test(m[r]))return m[r]}}return null}}}]);