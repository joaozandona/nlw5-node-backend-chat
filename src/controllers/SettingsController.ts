import { Request, Response } from "express";
import { SettingsServices } from "./services/SettingsServices";

class SettingsController {
  async create(request: Request, response: Response){
    const { chat, username } = request.body;
    
    const settingsService = new SettingsServices();

    const settings = await settingsService.create({chat, username})

    return response.json(settings);
    }
}

export { SettingsController }