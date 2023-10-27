'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "700cf86f6179ee3133d84ab5fa410134",
"assets/AssetManifest.bin": "3ffd7f3966c00fbe947a37d071356385",
"assets/FontManifest.json": "d3409cc87e3fb4150e650aa26c0a82a9",
"assets/assets/icon2/imageupload.png": "2a84b228891d2d37551bbaa27f8a76c3",
"assets/assets/icon2/switch2.png": "918e2b846984d8c3820ba011cdcaf5a1",
"assets/assets/icon2/forword_browse.png": "67210c4dca6ed528889eeb93032473be",
"assets/assets/icon2/gallary.png": "72971a227fc384d40e4c14e6ee4f75fe",
"assets/assets/icon2/setting.svg": "749a665ddb1b0c0158f5969cd62eb553",
"assets/assets/icon2/locationcity.png": "9c17d7f38e26b455454b4558b80d901d",
"assets/assets/icon2/setting.png": "b49fcd644278aa6be0cf0fdf7aa40384",
"assets/assets/icon2/greating.svg": "e19ce5cda643a3f324c64ae6edf5f184",
"assets/assets/icon2/arrow_forword.png": "a42967ffc8bbbf99be8bd321ce98e7ef",
"assets/assets/icon2/outboundchat.png": "42ef0743b20b5c984c700c37284e3a72",
"assets/assets/icon2/switch.png": "8ba7b59b6f67bb694a9461bcb612e1d9",
"assets/assets/icon2/r_sendcv.svg": "1152637ce4d233f247d157661c6e1251",
"assets/assets/icon2/locaton.png": "7ec9e4fdd2b13821b18a4c08cb910194",
"assets/assets/icon2/email2.png": "f1645c345f76549e14929bf1f2b90037",
"assets/assets/icon2/fav_filled.png": "2aff7e8b6e1fdbcff48cc8606efd9278",
"assets/assets/icon2/welcome_message.svg": "f25e82f7de909adda42448775e35dc93",
"assets/assets/icon2/not_interest.svg": "204702c0b097f7d92414f5c5d667aa2c",
"assets/assets/icon2/candidate_profile_photo.png": "b56b00b33b213b985a4d859e8252b9ec",
"assets/assets/icon2/gallary.svg": "0c3c5787fc4d3bd0f8074ae2f99f8347",
"assets/assets/icon2/purchase_history.png": "b76a1161c7ad59a273c87da934ad693c",
"assets/assets/icon2/edit.png": "3894daa4152eb903e76b3ebe180bd6ef",
"assets/assets/icon2/lavel.png": "ab8ed906bfb142cd9b714b1b1afeaf36",
"assets/assets/icon2/tick-mark.png": "60010098f20f506aa324698919771670",
"assets/assets/icon2/cancle.png": "8bf34b0d1a7d63f6f1f79f518eacdff9",
"assets/assets/icon2/Add_round_light.svg": "a4a115b5081080cdf383b2d808579f59",
"assets/assets/icon2/education.png": "9bb22e101e57dd9b07f32515f51c4816",
"assets/assets/icon2/r_call.svg": "4d2c69df155a1f4ad904c1fe1100eef3",
"assets/assets/icon2/company_name.png": "3f47003b4931813320b5883d44d335b8",
"assets/assets/icon2/Job%2520Profile.png": "7ebb17c51c3f2a93746bf5cb9ab73375",
"assets/assets/icon2/Group.png": "0f8be8fff4e34d5a2aca7a673c42087e",
"assets/assets/icon2/bring.svg": "9deb6f074e5cfaf5e6b5a8938d34b426",
"assets/assets/icon2/messageseen.svg": "595cc32d717969645ce818c6024eb497",
"assets/assets/icon2/active.png": "c838a5187ecf5c9e3cf4a61bb8ee1126",
"assets/assets/icon2/appontment.png": "4af456a1ea834c64e84084d9d8bf2295",
"assets/assets/icon2/manage_cv.svg": "937133079cad3440e5bef1cd3fbefcdd",
"assets/assets/icon2/doc.png": "84577c715a8011b382dd880471596026",
"assets/assets/icon2/Group2.png": "090603d348a1b8c744f1f9467e72ad37",
"assets/assets/icon2/greatingmessage.png": "7162c02e05572995c6d7831bea01eae7",
"assets/assets/icon2/reject.svg": "66575da600177e369a94430ea5523831",
"assets/assets/icon2/contact.png": "09c36dce10b6153a89fb248f2d5ce6cc",
"assets/assets/icon2/switch.svg": "848c8c814fa5ce5bc372bd0ac9ffb275",
"assets/assets/icon2/upload.png": "3e9d274f9a5950654a282d2c2bec6a6e",
"assets/assets/icon2/email.png": "3de1e5e03ec1d454ae4091d2f6663f66",
"assets/assets/icon2/whoviewme.svg": "caa3279acda7e0c73ab809e3874b4b19",
"assets/assets/icon2/browse_category.png": "33b59192ff0ce30233af558319405306",
"assets/assets/icon2/linkdin.png": "f3e30215582c31a54ab85e2af68ef87b",
"assets/assets/icon2/location2.png": "7f98d9a28d780ec1adf4ac7e17481ff2",
"assets/assets/icon2/iccard.png": "07e68964b7a9d2ed64c4225e13924580",
"assets/assets/icon2/search.svg": "ad16c9710fe23d9f41e465d75cb69a99",
"assets/assets/icon2/forword.png": "8f6fa3455778379da395d6704d17d617",
"assets/assets/icon2/greating.png": "750d45a0bb9a8e1032e2eae1b2b2af5d",
"assets/assets/icon2/job_manage.png": "5b9c7c729711c17c6d34fe0058d391f6",
"assets/assets/icon2/Group%252011415.png": "503874c9765b054a35bb585e74bd0d10",
"assets/assets/icon2/remotejob.png": "3dee926950f1a6e31bf7b030ac0ff53a",
"assets/assets/icon2/calender.png": "d71390b4217a5875cafdd0a00cad449b",
"assets/assets/icon2/greateing.svg": "8d79da0b5e7432915aa53917267b6095",
"assets/assets/icon2/Check_bix.png": "d5a0493428f925887b2275cdd0dd4697",
"assets/assets/icon2/save_candidate.svg": "153c3f01ec81087d81507604a0bb7e89",
"assets/assets/icon2/Job%2520Profile.svg": "90951df6f3156292bb206533dbf4a17a",
"assets/assets/icon2/purchase_history.svg": "c5a22f767323d677a4d4a5c6c38174e2",
"assets/assets/icon2/more.svg": "dea2825c8d09cf05720029b3a9787c57",
"assets/assets/icon2/fav_outlined.png": "3f6617b459cc98dcf5fe554f1c09aeb7",
"assets/assets/icon2/letter.png": "7fec26417bdc76baef79db9dd62fe3e6",
"assets/assets/icon2/contact.svg": "eea3aab13795945ab4662c73864eb8a5",
"assets/assets/icon2/whoviewme.png": "dcdebf25a70784b733d7c882df382e3c",
"assets/assets/icons/Frame_3.png": "a99dd5ed694bdec43bd7f7a54f7e5a75",
"assets/assets/icons/splash_logo.png": "f096955187f8c9236515147ace452120",
"assets/assets/icons/app_icon.png": "92cafb83d22965a3c4948afe9e3150b1",
"assets/assets/Send_2.mp3": "d92b48399fef6b0bacbcf27b22ac58b0",
"assets/assets/seeker_default_avatar/default_av14.png": "25009f8467913b821032ccffb81158f1",
"assets/assets/seeker_default_avatar/default_av7.png": "36e6673f86277735e6839060da475025",
"assets/assets/seeker_default_avatar/default_av9.png": "c8b1a2f84ad9ec8e3815accb86b1611c",
"assets/assets/seeker_default_avatar/default_av3.png": "978781757b3a36ebc64ae180d4f5409b",
"assets/assets/seeker_default_avatar/default_av13.png": "49d0d91c0353171da044ef4adeabde20",
"assets/assets/seeker_default_avatar/default_av6.png": "a369ea1d91b4f52a32c606ad92d81194",
"assets/assets/seeker_default_avatar/default_av1.png": "9bb1e78f111fdd9d5b949bd76a58b09c",
"assets/assets/seeker_default_avatar/default_av8.png": "2438c67a2c2fc8e02b28bd966cb82285",
"assets/assets/seeker_default_avatar/default_av5.png": "e796a025965c9c22b2378e04e6bb2410",
"assets/assets/seeker_default_avatar/default_av2.png": "7d1c85db0b8830595e57dac0bd679fb7",
"assets/assets/seeker_default_avatar/default_av4.png": "97adaa5de5b09d8f3200e96c9ba42f91",
"assets/assets/seeker_default_avatar/default_av11.png": "690dee8d7a6e53f7e0a6b0e1976356bc",
"assets/assets/seeker_default_avatar/default_av12.png": "dc31489c2f79aa6640a1145e96280ea3",
"assets/assets/seeker_default_avatar/default_av10.png": "9a97471997b5d4bd99e6ffc8d8d2582c",
"assets/assets/about_me_ex/avatar1.png": "4c3de305428dac5ff5ff69abdeb61f11",
"assets/assets/about_me_ex/avatar2.png": "146666c75391795aba1f732500e540ae",
"assets/assets/about_me_ex/avatar3.png": "7ae0fb7beebdca4d72e12e79b1118e90",
"assets/assets/about_me_ex/avatar4.png": "ca14ac7d70ca15094ff7f58d4071bb07",
"assets/assets/about_me_ex/avatar5.png": "ee9313b3918fce3f13cf3eed6f3f6086",
"assets/assets/svg/emoji_white.svg": "0bd2802940cb5bcf1f15bff271cf877f",
"assets/assets/svg/horizontal_switch.svg": "46f96c3869eb0a927968055807ecb8f5",
"assets/assets/svg/graduate.svg": "26edd10a243e144b2ca1bd72f0429913",
"assets/assets/svg/setting.svg": "5fc737f7841f8a5fb47618efde372b92",
"assets/assets/svg/privacy_policy.svg": "94c0a50c3cf23253a3191c93a565a0d1",
"assets/assets/svg/greeting.svg": "6680f7fa484752f59f4000d58261dc0d",
"assets/assets/svg/about.svg": "6da62ce0cd790f5bc8c75447fe335c91",
"assets/assets/svg/profile_icon.svg": "0b698867823b43a190d2b4eb2c44c1bc",
"assets/assets/svg/arrow_forward2.svg": "fc641323ded7f5482a56af55655d84e1",
"assets/assets/svg/resume_icon.svg": "fe3ec5472162b89250aa3f01f62e3a1b",
"assets/assets/svg/calander.svg": "68ea11f6d18a21e0bcf5b40f4e86f288",
"assets/assets/svg/successfully_done.svg": "b191d439d94a287a185cee960d36fc4a",
"assets/assets/svg/close_icon.svg": "a9cdd61750f69f6ff55d7bda97d2425b",
"assets/assets/svg/whatsapp.svg": "47bedd100557370e73143a5ea6cd79c4",
"assets/assets/svg/arrow_forward_bold.svg": "f4aa4bd97f84c67653475a949cfd19a2",
"assets/assets/svg/download_icon.svg": "fc1b1c2ec40fae1ed177cf36d528e13f",
"assets/assets/svg/add_button.svg": "ab4166a3a87e2fa256f533ddb07bfd0f",
"assets/assets/svg/arrow_back.svg": "5bff86b687fa8f6285a93ac712ed6a8f",
"assets/assets/svg/document.svg": "ef2d8d515830e6199e16441e820b249c",
"assets/assets/svg/dot.svg": "0d17bec2339c9755ec8168ebbb40b1fd",
"assets/assets/svg/done_double.svg": "483f72bf272436853ad699e6900c9f33",
"assets/assets/svg/data_transfer.svg": "b0d85fafe1728c76294cf2d40db5a3de",
"assets/assets/svg/saveIcon_filled.svg": "54b3f188ca357c661cc17dc8d8f33548",
"assets/assets/svg/duration.svg": "8d7a9999be7b6fbd5bc254b861cf339e",
"assets/assets/svg/world.svg": "b766cce630fe5328203b583692fddb55",
"assets/assets/svg/candidates.svg": "8c477ebe0295ef904af9f48f6b0a0021",
"assets/assets/svg/email.svg": "9a74cf548e241d1b0aafe751d3bc7679",
"assets/assets/svg/notification.svg": "c5275b802f14e497c685102a85b61d82",
"assets/assets/svg/done.svg": "098f4493784283740b6f9b4fcfd1bb6a",
"assets/assets/svg/emailIcon2.svg": "8f422767772a883b573a79a08bb72ff9",
"assets/assets/svg/emoji_blue.svg": "2c8c008de34a9bd731da4f09a6e135d9",
"assets/assets/svg/mobile.svg": "1c3cfe276c08e61ef8dadec5e842b07c",
"assets/assets/svg/validated.svg": "5261785d7e564751d4505a40af6fafb0",
"assets/assets/svg/report_Icon2.svg": "e5967f476accecb2a73ea0626f54e641",
"assets/assets/svg/location.svg": "e9d92ab70729f2c12cbda1f79193d1d1",
"assets/assets/svg/add_filled.svg": "6672b04b032df4287188b917b1ecb910",
"assets/assets/svg/arrow_forward.svg": "52f0457f526198b84bb30a9fff66ce0f",
"assets/assets/svg/done3.svg": "972a7a75bb1f7a740e12155e78c0c72e",
"assets/assets/svg/save_icon.svg": "b1506184257f090bb35005302303db4a",
"assets/assets/svg/work_exp.svg": "c9c1276c7b54406b9fa687b9bb81c32e",
"assets/assets/svg/real_avatar.svg": "0d093c7a7c600844b37c7cf8d0e99332",
"assets/assets/svg/alarm_clock.svg": "b28632d71c1d91afad01bcf0a4a9cec1",
"assets/assets/svg/recruiter_done.svg": "2d4651e9ee4d4be10c93e6717f3d4eff",
"assets/assets/svg/home.svg": "827ceb949928faa4deb27f05f6ffc5f8",
"assets/assets/svg/upload.svg": "be3daa6732c98bcea54224d81ad234b9",
"assets/assets/svg/close_account.svg": "73211aff8e0b980d3a73a3ac2aa55e1b",
"assets/assets/svg/done2.svg": "ebe231c1e6d70e07849b0fa89d3593d5",
"assets/assets/svg/update.svg": "6627b7f89eeca501d1308b1bea359a93",
"assets/assets/svg/fresher.svg": "0578ef683c72b7fcd88c9bfc56aa4939",
"assets/assets/svg/eye.svg": "6ea148d0de33b9f2f948e9d20435aed0",
"assets/assets/svg/jobs1.svg": "5c54ed04edf2217ab88b8905dc598c55",
"assets/assets/svg/add.svg": "8b620a416e96522d0c8729d30f1c7e91",
"assets/assets/svg/profile_edit.svg": "abaea69d338ed09ad7d744abd8313a85",
"assets/assets/svg/browse_more.svg": "4ca35f3a0ba8ef9269ad85f5a7bbcf93",
"assets/assets/svg/privacy.svg": "96cb45b15e297b372908cb6fff721769",
"assets/assets/svg/message.svg": "c090a1ddd541111914309bc917d6a6fb",
"assets/assets/svg/saved.svg": "9ceed4203f96965f4f49e5988d73fe2b",
"assets/assets/svg/taka.svg": "6b9a39ad27dee2d7384019d3fc9776e4",
"assets/assets/svg/circle.svg": "ba8f81d72b42c6e2765cfb3d87f881ef",
"assets/assets/svg/share_icon.svg": "121aba6f5a684733864ec301e7219b0d",
"assets/assets/svg/about_me.svg": "ea6068f60ab64a971cd6212725a7243b",
"assets/assets/svg/search2.svg": "1a14ff634d9761bbd98bb892462d485e",
"assets/assets/svg/edit1.svg": "16836f698c513e052e5134c9f4cee281",
"assets/assets/svg/verified.svg": "dd9d63cf02df3522a1a93fdbac2e368b",
"assets/assets/svg/cVerified.svg": "a9cda2f3274b17009cecc4aa4ed09576",
"assets/assets/svg/terms_and_conditions.svg": "312071847c8620cb48220c60e78dbed1",
"assets/assets/svg/camera_icon.svg": "b1a5b3674d727260342e5dbff0416b60",
"assets/assets/svg/skills.svg": "15e9ed36dde95ee2bd715e6bdec17346",
"assets/assets/svg/photo_upload.svg": "1143569af45b2d775a419c071a2f7641",
"assets/assets/svg/jobs.svg": "02cdd41b7c0a71d8a82687d948aa25a0",
"assets/assets/svg/location_search.svg": "4501dcc4755a06465aad369e1b82c6a0",
"assets/assets/svg/drop_down.svg": "d176463d262a3af8628ddb2ebc9293a4",
"assets/assets/svg/close_icon2.svg": "38318b8ba1d0bf2a9dba09637e452ebd",
"assets/assets/svg/star.svg": "8e818716b5c8674ca806cdfe8c36863f",
"assets/assets/svg/back_arrow.svg": "dc43accac54f7dbac17493959df1dd67",
"assets/assets/svg/search.svg": "440de9bcf5c3a8e64f16a96a897635fc",
"assets/assets/svg/dropdown.svg": "1cdbd62e3479bc31395e3f7018052320",
"assets/assets/svg/share_icon2.svg": "7f8e1f6a1eff27f9cebbd7029d914c0c",
"assets/assets/svg/age.svg": "541ff9c19261f39c4929c5dce22cf71f",
"assets/assets/svg/profile_icon1.svg": "1561d979481e8013d3cfb29b3125ef96",
"assets/assets/svg/navigation_icon.svg": "2da5fa692abefbd5f360a41b3bcbb0d3",
"assets/assets/svg/clock.svg": "0d500d6d8ca409f9481fa608266a3ff6",
"assets/assets/svg/switch_icon.svg": "7040c267c7bb8717d4c4dcfe022a2c49",
"assets/assets/svg/career_pref.svg": "61f2560294b7ba818437a5b744e8027a",
"assets/assets/svg/see_next_avator.svg": "c6d2e002c04db967b6f3c35659272dae",
"assets/assets/svg/dot2.svg": "5b274e8d629f9e523f3dc4b895eee8d6",
"assets/assets/svg/cancel_subscription.svg": "10e807577ba31967609d0d2b7287da17",
"assets/assets/svg/candidates1.svg": "6b97d20066e9f8112952109475f21f0c",
"assets/assets/svg/message1.svg": "5c05bec175d2b85d1fe327104e0e4711",
"assets/assets/svg/share_link.svg": "6b291987b324461593d53b81480b56e8",
"assets/assets/svg/tick_mark_verifi.svg": "b55c5a5a6814d426b2d0b78f4666e189",
"assets/assets/svg/camera.svg": "23b087a6f8c8a81b7e709c3c8e9ac8d8",
"assets/assets/svg/7-Check.svg": "0a79da8d20be764d094e471d09fc14fb",
"assets/assets/svg/warning.svg": "775af553c2a649addef4510cbb93f8ed",
"assets/assets/svg/resume.svg": "52934a15df427c2658525241d18b6bc1",
"assets/assets/svg/contact.svg": "f8b38589784841f8ae9398975f66f622",
"assets/assets/Recieve_2.mp3": "d89d09b2e8bec4081fd56a17b9656d9b",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Helvetica-ExtraLight.ttf": "617d5f1697c695120f15b139cc8e29fe",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/Helvetica-light.ttf": "9a8c18bd1dbe8508bc2525be7e07d0ff",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/images/job_seeker_cartoon.png": "a12ba17a22c72eb9373ada5cff6167c5",
"assets/assets/images/whatsapp.png": "cc7ed84031a39e69a28d9a007c06d56f",
"assets/assets/images/fileexchange.png": "a0249e925a69a7d8537c359ecc376dbd",
"assets/assets/images/message.png": "4cf0986932a5dec466e020a3e1e95112",
"assets/assets/images/delete.png": "b82b91bde6b8f64e78121a4f73c4c8fc",
"assets/assets/images/twitter_icon.png": "57874af99bc58d5ada5df9a49ba26fc7",
"assets/assets/images/loginomg4.png": "8b895510910d18c29d685f3a93f8b0dd",
"assets/assets/images/loginimg5.png": "10cba86ade9d74b1d9c10f4fc79fee47",
"assets/assets/images/profile.jpg": "7b28486aef56a9acfcfd585422898b5a",
"assets/assets/images/undraw.png": "482709e649f08a4242db04c0dd724997",
"assets/assets/images/aboutIcon.png": "ad597f27e258804cf86939176e0ea8d5",
"assets/assets/images/rejected_candidate.png": "4a457ad84da00a7904a43325b07bf9eb",
"assets/assets/images/crown.png": "12794a3bb4cbc4303a271e64524ffa61",
"assets/assets/images/delete3.png": "dd6505b20980285924cb34965307948e",
"assets/assets/images/sad.png": "2f19a3e469100e389faf790d6d14e2ba",
"assets/assets/images/unseen.png": "65bfef7ea25d2691a06e1f6bb85e826f",
"assets/assets/images/expected_salary.png": "47ebabbb2a7d727c178f3d567b587b60",
"assets/assets/images/viewed_msg.png": "57d5af4208aa4eab52275ca0e3ced3df",
"assets/assets/images/pdf.png": "6d6ae837dafc1f9e27f2cfb0b7b690d1",
"assets/assets/images/instagram_icon.png": "e57b545afb6ad07a4c2ca7d94df01cab",
"assets/assets/images/facebook_icon.png": "76797c8df858cc6513c6cde6c3bab1aa",
"assets/assets/images/empty_saved_me.png": "5db33cd9e82da8279813528a8e242f90",
"assets/assets/images/updating.png": "f1235bf2c3ab6aaaeac852e7e9886cf2",
"assets/assets/images/empty_viewed_me.png": "f80e2e716868968b941c18a5154173d9",
"assets/assets/images/bringin_Logo.png": "280b42a464ba8d2bf3a3af59fb1a53e8",
"assets/assets/images/suitcase.png": "7bae1b1dc994e0a1a9a2c86bf1b11c49",
"assets/assets/images/job_location.png": "5a7d46114e14ecd7f409babf211092c7",
"assets/assets/images/empty_payment_history.png": "4f3b9d32f2c8e27226e72a2192b2492e",
"assets/assets/images/phonenum.png": "0add41f7aefbf2951b4d362853a3a65c",
"assets/assets/images/video.png": "b19a5e166eb2d8f28825cd54c07c5f2f",
"assets/assets/images/browse.png": "4f824d6f2c333e4c02fb07002e0fff33",
"assets/assets/images/candidate_job_profile.png": "125e2f59f984a8ee1cf04b356a19a881",
"assets/assets/images/job_type.png": "48a504bbc21c92ade8eefc1e697e212d",
"assets/assets/images/linkedin_icon.png": "e70700f9e143ea8626469e9a099b4da7",
"assets/assets/images/offer_letter.png": "cc31846b23fa4b01538a71b47e4f2d00",
"assets/assets/images/Group%252011378.png": "65e89d0fc1a13cdce26ec9caf7c79348",
"assets/assets/images/buildings.png": "a3a211ea5e0e80025bceb5e28a1b5794",
"assets/assets/images/delete2.png": "4b9ba1e2929df087f60e045bbbcb2190",
"assets/assets/images/id_card.png": "99011f62550a30ed2a07beb16be38f96",
"assets/assets/images/Broken_heart_light.png": "745b61c75c34259ceee1cb548225eb58",
"assets/assets/images/recruiter.png": "bffb9675fb0e7df13dafb39bc7f5c710",
"assets/assets/images/Seen%2520Icon.png": "263ca6779c8646fcfb3329f40f1e0b5f",
"assets/assets/images/undraw1.png": "47b0294d2d315a6f15554b02ad150116",
"assets/assets/images/graduation.png": "83f8e05f5706224e2b240a8fd1e06b3c",
"assets/assets/images/appointment_letter.png": "db7b4bd987be3db471bd6e09734a894b",
"assets/assets/images/expertise_area.png": "1e4b4666fc72404705af8934a9e4ef10",
"assets/assets/images/linkedin.png": "2317681d0692961746af3c1b9599a72b",
"assets/assets/images/vector.png": "1f21eb7ac28a102d529334bcc2318e1d",
"assets/assets/images/recruiter_job_profile.png": "5b1c8bbe21696e8b67b819f7d3061083",
"assets/assets/images/empty_job_post.png": "0f588b6ae3cc0315d0105e8f2cbc11f4",
"assets/assets/images/recruiter2.png": "a60a185a08f4d5ba6fdef862a58a61ab",
"assets/assets/images/undraw_woman.png": "e1b9e717d0b0692f74e2f0315a3608c0",
"assets/assets/images/reculater_cover_image.png": "232b645f05dc209500436874d10872c5",
"assets/assets/images/profile_completion.png": "842bff3e47aef784eea42561cbef1569",
"assets/assets/images/Vector%252090.png": "c500e3fd04a621510f171573749de24a",
"assets/assets/images/authorized_doc.png": "857444e8d3d7c8b5f025c01bc22d02d2",
"assets/NOTICES": "af17fe63ee748d704087008ee4b4bb32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/dash_chat_2/assets/emoji.svg": "7f30a496f92323c7d1586fdd201a40dd",
"assets/packages/dash_chat_2/assets/doc.svg": "6c50e1571849f1d0694373468578a5ca",
"assets/packages/dash_chat_2/assets/send.svg": "46240e24cb0e749b9269c993160422de",
"assets/packages/dash_chat_2/assets/cv.svg": "75aa8b8be39539ac26a167d04b8c9334",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/messageseen.svg": "595cc32d717969645ce818c6024eb497",
"assets/packages/dash_chat_2/assets/Vector3.svg": "58bb38335d81c73ac231a58bf6b1bf96",
"assets/packages/dash_chat_2/assets/call.svg": "a102b273c7e4ef7fb86dfa1fb058f82e",
"assets/packages/dash_chat_2/assets/rec_cv_req.svg": "75aa8b8be39539ac26a167d04b8c9334",
"assets/packages/dash_chat_2/assets/callicon.svg": "5c1ef4c4d96fcaeb4f58251a493ed22d",
"assets/packages/dash_chat_2/assets/Vector.svg": "7d33162f6362db11e4bda043ba1e69b5",
"assets/packages/dash_chat_2/assets/rec_num_req.svg": "a102b273c7e4ef7fb86dfa1fb058f82e",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/packages/dash_chat_2/assets/Vector2.svg": "105b951ef99fc82626a5266e97b2d4b5",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/AssetManifest.json": "bc845a11a369b3836eefbd7a1efaf308",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "c8cdf1f29b02b9cb6e22a914ff3d9327",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "e8a06fe53ef3d8700ada49d76b7a9510",
"manifest.json": "858ce559894a085addf36b38ee51f3a0",
"index.html": "a8d8c3f546ba1d7f6894cb567ba493a7",
"/": "a8d8c3f546ba1d7f6894cb567ba493a7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
