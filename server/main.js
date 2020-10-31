import { FilesCollection } from 'meteor/ostrio:files';
import { Meteor } from 'meteor/meteor';
import {Videos} from '/lib/collection.js';
import { Accounts } from 'meteor/accounts-base';


//------------------------------------------------------------ startup code ------------------------------------------------------------

Meteor.startup(() => {

  	// code to run on server at startup
  	console.log("I am the server");

	/*if(Videos.find().count()==0){
		for(var i=1;i<=6;i++){
			Videos.insert(
				{
					video_src: "video"+i+".mp4",
					video_alt:"video "+i
				}
			);
		}
	}*/	
});

/*if (Meteor.isServer) {
  Meteor.publish('files.Videos.all', function () {
    return Videos.find().cursor;
  });
}
*/
Meteor.methods({
	'videos.update'({video_id}){
		Videos.update(
			{_id:video_id},
		);
	}
});

/*Meteor.publish('files.videos.all', function () {
    return Images.find().cursor;
  });*/