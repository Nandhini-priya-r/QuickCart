import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdate,
  syncUserDeletion,
  createUseOrder,
  
} from "../../../config/inngest.js";   
                                              

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdate,
    syncUserDeletion,
    createUseOrder

  ],
});
