# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.3.1](https://github.com/ecomplus/application-starter/compare/v1.3.0...v1.3.1) (2021-11-08)


### Bug Fixes

* **deps:** update dependency aws-sdk to ^2.1019.0 ([2aee55f](https://github.com/ecomplus/application-starter/commit/2aee55f523ca8afb405a3d6f121c2ea4a994ee91))

## [1.3.0](https://github.com/ecomplus/application-starter/compare/v1.2.2...v1.3.0) (2021-11-08)


### Features

* **variation-id:** handle stock notifications by variation id [[#12](https://github.com/ecomplus/application-starter/issues/12)] ([55309e7](https://github.com/ecomplus/application-starter/commit/55309e7418b3b4c2a3ce649daa3ec53b5a3282bf))


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.15.5 firestore ([f49f0d0](https://github.com/ecomplus/application-starter/commit/f49f0d067e7d12334113f04ea6594b6bf4e8f6e2))
* **deps:** update @ecomplus/application-sdk to v1.15.6 firestore ([d6852ae](https://github.com/ecomplus/application-starter/commit/d6852aed6e37838e1d94ebf7dec7a6f2f10196b4))
* **deps:** update all non-major ([f84d6b9](https://github.com/ecomplus/application-starter/commit/f84d6b988f66b8bd6e2a345a9b04608380547e16))
* **deps:** update all non-major dependencies ([#44](https://github.com/ecomplus/application-starter/issues/44)) ([7500916](https://github.com/ecomplus/application-starter/commit/7500916e95c5200a77f7d5ddbf8db49a06192d4f))
* **deps:** update dependency @ecomplus/application-sdk to ^22.0.0-firestore.1.15.6 ([2b20394](https://github.com/ecomplus/application-starter/commit/2b203947f827404b1bd9340be8040ea7a9948549))
* **deps:** update dependency dotenv to v10 ([#39](https://github.com/ecomplus/application-starter/issues/39)) ([264276d](https://github.com/ecomplus/application-starter/commit/264276da940edc912b1088178c86fcd4c9d10837))
* **deps:** update dependency firebase-admin to v10 ([#58](https://github.com/ecomplus/application-starter/issues/58)) ([4ab8a44](https://github.com/ecomplus/application-starter/commit/4ab8a44d4e22837564eea5217d985d6781dcd1d4))

### [1.2.2](https://github.com/ecomplus/application-starter/compare/v1.2.1...v1.2.2) (2021-05-12)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.14.11 ([1eb51c7](https://github.com/ecomplus/application-starter/commit/1eb51c7e23010185b9128d7e99b849d9964c97a8))
* **deps:** update all non-major dependencies ([#16](https://github.com/ecomplus/application-starter/issues/16)) ([12ee6d5](https://github.com/ecomplus/application-starter/commit/12ee6d503b388df74411b85b6fe0848211c3899a))

### [1.2.1](https://github.com/ecomplus/application-starter/compare/v1.2.0...v1.2.1) (2021-05-10)


### Bug Fixes

* **notification-view:** properly requesting store public data (store id on endpoint) ([927fc80](https://github.com/ecomplus/application-starter/commit/927fc80642d0fddfa1685bfa8ff62f2c13a9b47a))

## [1.2.0](https://github.com/ecomplus/application-starter/compare/v1.1.3...v1.2.0) (2021-05-10)


### Features

* **auth:** accept operator token on url param ([e579b07](https://github.com/ecomplus/application-starter/commit/e579b07cc6efcb19f962cafe61341a2a967391c2))
* **list-notifications:** endpoint to export registered notifications list (csv) ([8d50acc](https://github.com/ecomplus/application-starter/commit/8d50acc8167294919fcb5c2d886972f0053887e4))


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.14.10 ([2544c71](https://github.com/ecomplus/application-starter/commit/2544c71bd061459345eadde89adb67d87d6f4eb1))
* check required fields ([0eff00c](https://github.com/ecomplus/application-starter/commit/0eff00c15845f11f705b03152091e71508eb2a45))
* **list-notifications:** filter by 'store_id' in place of 'storeId' ([5e3d513](https://github.com/ecomplus/application-starter/commit/5e3d513a27519d9803ec69250aca69a88f241697))
* **list-notifications:** stop parsing 'created_at' field ([8839cb9](https://github.com/ecomplus/application-starter/commit/8839cb9546db84a35441d190771361acc925895b))
* **list-notifications:** syntax fix (commonjs) ([afac688](https://github.com/ecomplus/application-starter/commit/afac6882ef26025f6e87a3e1aea7952b367a0a84))
* **list-notificatons:** try parsing firestore timestamp to iso date ([9c6c842](https://github.com/ecomplus/application-starter/commit/9c6c842b9e9767b9715005d8a84e1de2ee5eff43))

### [1.1.3](https://github.com/ecomplus/application-starter/compare/v1.1.2...v1.1.3) (2020-11-05)


### Bug Fixes

* **auth-callback:** check `row.setted_up` in place of 'settep_up' ([7db5168](https://github.com/ecomplus/application-starter/commit/7db5168a8186ffdd677d030c59c5cdecc0ffe197))
* **ecom-config:** fix procedure triggers ([bbe9774](https://github.com/ecomplus/application-starter/commit/bbe9774af37cda4b8a881f2b063606f5cabcba0a))
* **refresh-tokens:** add scheduled cloud function to run update ([8adb5d6](https://github.com/ecomplus/application-starter/commit/8adb5d61436c7bfdf79c463f8794aaf0c65aa6b6))

### [1.1.2](https://github.com/ecomplus/application-starter/compare/v1.1.1...v1.1.2) (2020-06-29)


### Bug Fixes

* avoiding duplicating emails ([b959ebc](https://github.com/ecomplus/application-starter/commit/b959ebcd36a94e7d0c753fdf676b96360f8c75b9))
* **webhooks:** avoiding duplicating emails ([956277a](https://github.com/ecomplus/application-starter/commit/956277aa21d813a0debb8d4ecba4a3b4cb7b1775))

### [1.1.1](https://github.com/ecomplus/application-starter/compare/v1.1.0...v1.1.1) (2020-06-25)


### Bug Fixes

* preventing with missing package ([524c9c9](https://github.com/ecomplus/application-starter/commit/524c9c9e22856b539b9000d63e62ddb783e573f6))

## [1.1.0](https://github.com/ecomplus/application-starter/compare/v1.0.0...v1.1.0) (2020-06-25)


### Features

* using @ecomplus/transactional-mails ([bfea80a](https://github.com/ecomplus/application-starter/commit/bfea80aacd477fef3273087f00d3d5afa4b8e92c))


### Bug Fixes

* error message ([3c81142](https://github.com/ecomplus/application-starter/commit/3c811420be433c741b16ffa9452812c47ef08d1e))

## 1.0.0 (2020-06-17)


### Features

* **back-to-stock:** sends emails when product returns to stock ([9aea1f0](https://github.com/ecomplus/application-starter/commit/9aea1f022a4a6c19b54dffcb4d869a605f3091d5))
* **routes:** notification resource and view ([e01babe](https://github.com/ecomplus/application-starter/commit/e01babee62a9bc54e99f4f5239ecd7b2d3d9a756))
* **views:** view for notification resource ([fb64820](https://github.com/ecomplus/application-starter/commit/fb64820361c46f4b55881380d04e306f7d0dd591))
* **webhook:** handling triggers from ecom ([61bf785](https://github.com/ecomplus/application-starter/commit/61bf785ac854967323155e4841eb95c4a8465993))
* **webhook:** handling triggers from ecom ([c1e3a11](https://github.com/ecomplus/application-starter/commit/c1e3a116547b00a0aaa7e53eeddaa1a3d873b68a))


### Bug Fixes

* **aws-emails:** store name ([d2560b4](https://github.com/ecomplus/application-starter/commit/d2560b4f328a350f1965821c785593333e17eba3))
* **deps:** update @ecomplus/application-sdk to v1.13.0 ([6266a01](https://github.com/ecomplus/application-starter/commit/6266a018b2d84aaf3a0a888b96ee7925648566f8))
* **deps:** update pkg dependencies ([ed9e4ae](https://github.com/ecomplus/application-starter/commit/ed9e4aee0ab67ef7a6e4315ddf4779293d2c013e))
* **firebase-deploy:** comma in object ([61b6caa](https://github.com/ecomplus/application-starter/commit/61b6caa534e850f66a7be3044de2349effdb2701))
* **index:** removed mock NODE_ENV ([99fbad0](https://github.com/ecomplus/application-starter/commit/99fbad0ef71715c1baf8eb3428907e0c90aed508))
* **layout.ejs:** url for post in notification ([86e0bfc](https://github.com/ecomplus/application-starter/commit/86e0bfc909ed3a2a7b435a0280754c123ad0daab))
* **notification:** fallback for css ([20a244c](https://github.com/ecomplus/application-starter/commit/20a244c96b412ec4b3c86b86aa55c48ecf8fe38a))
* **notification:** response status 403 when missing fields in body ([f8a19c7](https://github.com/ecomplus/application-starter/commit/f8a19c7f3cd4a14cfd52c3efcd0369c0ccd4c55c))
* **refresh-tokens:** force appSdk update tokens service ([f85a6cc](https://github.com/ecomplus/application-starter/commit/f85a6cc2a47904645c03dc068e4e6bb11c201cdd))
* env name ([4bdb9fa](https://github.com/ecomplus/application-starter/commit/4bdb9faf6add1ae2769a941e485948a1c925983a))
* get css from opt object ([bbd3b5c](https://github.com/ecomplus/application-starter/commit/bbd3b5c2f88091ab09f64a934db22890d14e9e4f))
* input required ([5cbdb87](https://github.com/ecomplus/application-starter/commit/5cbdb8757715ed4e7376d87d20a591060481df8e))
* input required ([25740f8](https://github.com/ecomplus/application-starter/commit/25740f80a2a53ba51f3c4f94742ace3f6ddbeb75))
* preventing errors with .then undefined ([7aad3c1](https://github.com/ecomplus/application-starter/commit/7aad3c1bb34e9778d8201cdde1f36af9838da103))
* save offer only with status 201 ([1834c94](https://github.com/ecomplus/application-starter/commit/1834c94e007e3ca37f007cad082cef403055e121))
* using env from firebase config ([8938a44](https://github.com/ecomplus/application-starter/commit/8938a4400d52bbc88d2a7b9f45a70b4386e2199d))

## [1.0.0-starter.12](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.11...v1.0.0-starter.12) (2020-05-29)


### Bug Fixes

* **deps:** replace @ecomplus/application-sdk to firestore version ([3d2ee85](https://github.com/ecomplus/application-starter/commit/3d2ee85feb2edab77950e5c266514152fbc9674d))
* **deps:** update all non-major dependencies ([#21](https://github.com/ecomplus/application-starter/issues/21)) ([7a370da](https://github.com/ecomplus/application-starter/commit/7a370da11dfd098c0a90da05d39fc62f9264fd63))
* **deps:** update all non-major dependencies ([#26](https://github.com/ecomplus/application-starter/issues/26)) ([e37e0e8](https://github.com/ecomplus/application-starter/commit/e37e0e8151768d79e81f4184ab937ddf9d775a4f))
* **deps:** update dependency uglify-js to ^3.9.2 ([#20](https://github.com/ecomplus/application-starter/issues/20)) ([adccf0a](https://github.com/ecomplus/application-starter/commit/adccf0a2fed37f2ccce57ded20d25af85407ac8a))

## [1.0.0-starter.11](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.10...v1.0.0-starter.11) (2020-04-27)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.13 ([70584c2](https://github.com/ecomplus/application-starter/commit/70584c245e97a1b539a3df3f74109f20d9a1fa3c))
* **setup:** ensure enable token updates by default ([67aea0e](https://github.com/ecomplus/application-starter/commit/67aea0eb363be3cc535a0f0f4d1b5b682958f243))

## [1.0.0-starter.10](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.9...v1.0.0-starter.10) (2020-04-27)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.11 ([b8217d0](https://github.com/ecomplus/application-starter/commit/b8217d03fe92b5c233615a0b6b4c01d7bad676c2))
* **deps:** update all non-major dependencies ([#19](https://github.com/ecomplus/application-starter/issues/19)) ([a99797a](https://github.com/ecomplus/application-starter/commit/a99797a129d6e2383ef5ef69c06afacd13cccfb0))
* **setup:** do not disable updates on refresh-tokens route ([b983a45](https://github.com/ecomplus/application-starter/commit/b983a45ada5575ee6435f7b3016ef35c28355762))

## [1.0.0-starter.9](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.8...v1.0.0-starter.9) (2020-04-21)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.10 ([8da579c](https://github.com/ecomplus/application-starter/commit/8da579c19c6530e8cc9fd338a07aece1fccc64ff))

## [1.0.0-starter.8](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.7...v1.0.0-starter.8) (2020-04-18)


### Bug Fixes

* **deps:** update all non-major dependencies ([#17](https://github.com/ecomplus/application-starter/issues/17)) ([785064e](https://github.com/ecomplus/application-starter/commit/785064ef5bf06db7c084f9b17b37a6077645735b))

## [1.0.0-starter.7](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.6...v1.0.0-starter.7) (2020-04-07)

## [1.0.0-starter.6](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.5...v1.0.0-starter.6) (2020-04-06)


### Bug Fixes

* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([b3c65e5](https://github.com/ecomplus/application-starter/commit/b3c65e5c7eb89a4825eb47c852ce65293d172314))
* **deps:** update all non-major dependencies ([#13](https://github.com/ecomplus/application-starter/issues/13)) ([33ff19b](https://github.com/ecomplus/application-starter/commit/33ff19bbdad1f34b6d1c255089dc0a0e4092b955))
* **deps:** update all non-major dependencies ([#8](https://github.com/ecomplus/application-starter/issues/8)) ([feba5b9](https://github.com/ecomplus/application-starter/commit/feba5b9cdc54e8304beff2b12658a6343ef37569))
* **deps:** update dependency firebase-functions to ^3.6.0 ([#15](https://github.com/ecomplus/application-starter/issues/15)) ([5f7f0a2](https://github.com/ecomplus/application-starter/commit/5f7f0a2bf5c744000996e2a0b78690b363462ee7))
* **deps:** update dependency firebase-tools to ^7.16.1 ([#14](https://github.com/ecomplus/application-starter/issues/14)) ([b8e4798](https://github.com/ecomplus/application-starter/commit/b8e479851bd02bf5929a7df8a71a761f1c1c1654))
* **deps:** update dependency firebase-tools to v8 ([#16](https://github.com/ecomplus/application-starter/issues/16)) ([b72560e](https://github.com/ecomplus/application-starter/commit/b72560e4fc86496499d553e47094ace25436272b))
* **ecom-modules:** fix parsing mod names to filenames and vice versa ([99c185a](https://github.com/ecomplus/application-starter/commit/99c185afebeae77deb61537ed9de1c77132c16ce))

## [1.0.0-starter.5](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.4...v1.0.0-starter.5) (2020-03-05)


### Features

* **market-publication:** handle full featured app publication to Market ([28379dc](https://github.com/ecomplus/application-starter/commit/28379dc3c4784e757c8f25e5d737f6143682b0db))
* **static:** handle static with server app files from public folder ([827d000](https://github.com/ecomplus/application-starter/commit/827d00079b0dc169b2eef31b8e0ac73c596307a8))

## [1.0.0-starter.4](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.3...v1.0.0-starter.4) (2020-02-21)


### Features

* **calculate-shipping:** basic setup for calculate shipping module ([db77595](https://github.com/ecomplus/application-starter/commit/db7759514bb25d151dd4508fb96b84c52b3e94ba))


### Bug Fixes

* **home:** fix replace accets regex exps to generate slug from title ([198cc0b](https://github.com/ecomplus/application-starter/commit/198cc0b911d4874d96f3cd5254d30cab5fe89765))
* **home:** gen slug from pkg name or app title if not set or default ([25c20bf](https://github.com/ecomplus/application-starter/commit/25c20bfade65a86e4f4b1026ef59a5694a022a74))

## [1.0.0-starter.3](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.2...v1.0.0-starter.3) (2020-02-21)

## [1.0.0-starter.2](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.1...v1.0.0-starter.2) (2020-02-21)


### Bug Fixes

* **config:** stop reading app from functions config ([7b9aab7](https://github.com/ecomplus/application-starter/commit/7b9aab727fefe8a5b84695e90a0d68e02b8c3f62))

## [1.0.0-starter.1](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.0...v1.0.0-starter.1) (2020-02-20)


### Features

* **get-auth:** endpoint to return auth id and token for external usage ([40a8ae2](https://github.com/ecomplus/application-starter/commit/40a8ae2e895d6e32c7032ca500040ec82c80dc5d))
* **server:** also supporting passing Store Id from query ([111f3a7](https://github.com/ecomplus/application-starter/commit/111f3a716fbfd2e155e3fb24242bddcae7cb065c))


### Bug Fixes

* **server:** remove 'routes' path when setting filename for routes ([119524c](https://github.com/ecomplus/application-starter/commit/119524c523a11364ed912769637a6f8e479af5f1))

## [1.0.0-starter.0](https://github.com/ecomplus/application-starter/compare/v0.1.1...v1.0.0-starter.0) (2020-02-18)


### Features

* **router:** recursive read routes dir to auto setup server routes ([ff2b456](https://github.com/ecomplus/application-starter/commit/ff2b45604723a8146c9481ea36a9400da5ccc2bc))


### Bug Fixes

* **home:** fix semver on for app.version (remove version tag if any) ([ad36461](https://github.com/ecomplus/application-starter/commit/ad364614a7f5599850ad39e00a94d310742e8f80))
* **middlewares:** update route files exports (named exports by methods) ([6a22e67](https://github.com/ecomplus/application-starter/commit/6a22e67135bc6110e6da6b4ab25f67ad8d77f597))

### [0.1.1](https://github.com/ecomplus/application-starter/compare/v0.1.0...v0.1.1) (2020-02-18)


### Features

* **env:** get 'pkg' from functions config ([bf45ec3](https://github.com/ecomplus/application-starter/commit/bf45ec33a2147d5be91fdc4955bd6cfa1b0867e2))
* **home:** set version and slug from root package, fix with uris ([d4b61fa](https://github.com/ecomplus/application-starter/commit/d4b61fab427aefdb2ac485d90eb1abe15d6aafc6))


### Bug Fixes

* **env:** firebase doesnt uppercase config ([502185e](https://github.com/ecomplus/application-starter/commit/502185ed30f346d8db77b849d6ba0eb48cb777cb))
* **require:** update @ecomplus/application-sdk dependency name ([d4174ac](https://github.com/ecomplus/application-starter/commit/d4174ac5425b85590db0e92d4b1d69a8567a6c55))

## [0.1.0](https://github.com/ecomplus/application-starter/compare/v0.0.4...v0.1.0) (2020-02-17)

### [0.0.4](https://github.com/ecomclub/firebase-app-boilerplate/compare/v0.0.3...v0.0.4) (2020-02-16)


### Bug Fixes

* **server:** update routes names (refresh-tokens) ([79a2910](https://github.com/ecomclub/firebase-app-boilerplate/commit/79a2910817cf4193b40e02b2b1e6b920e7fefb2d))

### [0.0.3](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.0.3) (2020-02-15)


### Features

* **server:** start reading env options, handle operator token ([ce107b7](https://github.com/ecomclub/express-app-boilerplate/commit/ce107b74cde375e875a85cc3ba0cc6a73740785d))
* **update-tokens:** adding route to start update tokens service (no content) ([20c62ec](https://github.com/ecomclub/express-app-boilerplate/commit/20c62ec6800fc326b89e8cf54b2916f56e5910e4))


### Bug Fixes

* **auth-callback:** fix handling docRef (desn't need to get by id again) ([629ca5a](https://github.com/ecomclub/express-app-boilerplate/commit/629ca5ab9849e3822cc190f423da5bf2e0c4daab))
* **auth-callback:** save procedures if not new, check and set 'settep_up' ([#3](https://github.com/ecomclub/express-app-boilerplate/issues/3)) ([4a01f86](https://github.com/ecomclub/express-app-boilerplate/commit/4a01f86c37e09cd7c0363f6fbc80de6eeef3ba20))
* **ECOM_AUTH_UPDATE_INTERVAL:** disable set interval (no daemons on cloud functions) ([2aa2442](https://github.com/ecomclub/express-app-boilerplate/commit/2aa2442061f0308be9eb9430552fa04ad148788c))
* **env:** fixed to get appInfor variable ([e9b1a3c](https://github.com/ecomclub/express-app-boilerplate/commit/e9b1a3ce0d17ee74a5eada70589340fd5a70e786))
* **env:** fixed to get appInfor variable ([22687e2](https://github.com/ecomclub/express-app-boilerplate/commit/22687e25f611d49f8c01494af114e0289cec251e))
* **middleware:** check standard http headers for client ip ([5045113](https://github.com/ecomclub/express-app-boilerplate/commit/504511329afe9277d540f0f542a316d04634ce9e))

### 0.0.2 (2020-02-11)


### Bug Fixes

* **lib:** remove unecessary/incorrect requires with new deps ([69f2b77](https://github.com/ecomclub/express-app-boilerplate/commit/69f2b77))
* **routes:** fix handling appSdk (param) ([0cf2dde](https://github.com/ecomclub/express-app-boilerplate/commit/0cf2dde))
* **setup:** added initializeApp() to firebase admin ([e941e59](https://github.com/ecomclub/express-app-boilerplate/commit/e941e59))
* **setup:** manually setup ecomplus-app-sdk with firestore ([64e49f8](https://github.com/ecomclub/express-app-boilerplate/commit/64e49f8))
* **setup:** manually setup ecomplus-app-sdk with firestore ([c718bd0](https://github.com/ecomclub/express-app-boilerplate/commit/c718bd0))
* **setup:** manually setup ecomplus-app-sdk with firestore ([33909bf](https://github.com/ecomclub/express-app-boilerplate/commit/33909bf)), closes [/github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js#L45](https://github.com/ecomclub//github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js/issues/L45)
* **startup:** setup routes after appSdk ready, add home route ([d182555](https://github.com/ecomclub/express-app-boilerplate/commit/d182555))


### Features

* **firestore-app-boilerplate:** Initial commit ([c9963f0](https://github.com/ecomclub/express-app-boilerplate/commit/c9963f0))
* **firestore-app-boilerplate:** Initial commit ([be493ea](https://github.com/ecomclub/express-app-boilerplate/commit/be493ea))
* **firestore-support:** minor changes ([3718cba](https://github.com/ecomclub/express-app-boilerplate/commit/3718cba))
* **firestore-support:** refactoring to  use saveProcedures function ([62971ef](https://github.com/ecomclub/express-app-boilerplate/commit/62971ef))
* **firestore-support:** removed sqlite error clausule ([2d47996](https://github.com/ecomclub/express-app-boilerplate/commit/2d47996))
* **routes:** add home route (app json) ([42a3f2b](https://github.com/ecomclub/express-app-boilerplate/commit/42a3f2b))

# [LEGACY] Express App Boilerplate

### [0.1.1](https://github.com/ecomclub/express-app-boilerplate/compare/v0.1.0...v0.1.1) (2019-07-31)


### Bug Fixes

* **procedures:** fix checking for procedures array to run configureSetup ([1371cdc](https://github.com/ecomclub/express-app-boilerplate/commit/1371cdc))

## [0.1.0](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.1.0) (2019-07-31)

### 0.0.2 (2019-07-31)


### Bug Fixes

* chain promise catch on lib getConfig ([281abf9](https://github.com/ecomclub/express-app-boilerplate/commit/281abf9))
* fix mergin hidden data to config ([8b64d58](https://github.com/ecomclub/express-app-boilerplate/commit/8b64d58))
* fix path to require 'get-config' from lib ([11425b0](https://github.com/ecomclub/express-app-boilerplate/commit/11425b0))
* get storeId from header and set on req object ([a3bebaa](https://github.com/ecomclub/express-app-boilerplate/commit/a3bebaa))
* handle error on get config instead of directly debug ([f182589](https://github.com/ecomclub/express-app-boilerplate/commit/f182589))
* routes common fixes ([2758a57](https://github.com/ecomclub/express-app-boilerplate/commit/2758a57))
* using req.url (from http module) instead of req.baseUrl ([d9057ca](https://github.com/ecomclub/express-app-boilerplate/commit/d9057ca))


### Features

* authentication callback ([8f18892](https://github.com/ecomclub/express-app-boilerplate/commit/8f18892))
* conventional store api error handling ([bcde87e](https://github.com/ecomclub/express-app-boilerplate/commit/bcde87e))
* function to get app config from data and hidden data ([ba470f5](https://github.com/ecomclub/express-app-boilerplate/commit/ba470f5))
* getting store id from web.js ([72f18c6](https://github.com/ecomclub/express-app-boilerplate/commit/72f18c6))
* handling E-Com Plus webhooks ([63ba19f](https://github.com/ecomclub/express-app-boilerplate/commit/63ba19f))
* main js file including bin web and local ([6b8a71a](https://github.com/ecomclub/express-app-boilerplate/commit/6b8a71a))
* pre-validate body for ecom modules endpoints ([f06bdb0](https://github.com/ecomclub/express-app-boilerplate/commit/f06bdb0))
* setup app package dependencies and main.js ([b2826ed](https://github.com/ecomclub/express-app-boilerplate/commit/b2826ed))
* setup base app.json ([015599a](https://github.com/ecomclub/express-app-boilerplate/commit/015599a))
* setup daemon processes, configure store setup ([db3ca8c](https://github.com/ecomclub/express-app-boilerplate/commit/db3ca8c))
* setup procedures object ([c5e8627](https://github.com/ecomclub/express-app-boilerplate/commit/c5e8627))
* setup web app with express ([d128430](https://github.com/ecomclub/express-app-boilerplate/commit/d128430))
