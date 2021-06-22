'use strict';

/**
 * Creates new player for video and ad playback.
 * @param {cast.receiver.MediaManager} mediaElement The video element.
 */
var Player = function(mediaElement) {
  var mediaElement = "https://dai.google.com/linear/hls/event/bQ2JGGVzTpqfCfcTZWay1Q/master.m3u8";  
  var namespace = 'urn:x-cast:com.google.ads.ima.cast';
  this.mediaElement_ = mediaElement;
  this.mediaManager_ = new cast.receiver.MediaManager(this.mediaElement_);
  this.castReceiverManager_ = cast.receiver.CastReceiverManager.getInstance();
  this.imaMessageBus_ = this.castReceiverManager_.getCastMessageBus(namespace);
  this.castReceiverManager_.start();

  this.originalOnLoad_ = this.mediaManager_.onLoad.bind(this.mediaManager_);
  this.originalOnEnded_ = this.mediaManager_.onEnded.bind(this.mediaManager_);
  this.originalOnSeek_ = this.mediaManager_.onSeek.bind(this.mediaManager_);

  this.setupCallbacks_();
};