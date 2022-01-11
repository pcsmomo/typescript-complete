import express from 'express';

// 2. Using accessor
export class AppRouter {
  private static routerInstance: express.Router;

  static get instance(): express.Router {
    if (!AppRouter.routerInstance) {
      AppRouter.routerInstance = express.Router();
    }

    return AppRouter.routerInstance;
  }
}

// 1. Regular way
// export class AppRouter {
//   private static instance: express.Router;

//   static getInstance(): express.Router {
//     if (!AppRouter.instance) {
//       AppRouter.instance = express.Router();
//     }

//     return AppRouter.instance;
//   }
// }
