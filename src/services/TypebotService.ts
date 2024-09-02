// src/ChatService.ts
import axios, { AxiosResponse } from 'axios';

interface ChatPayload {
  // Defina a interface para o payload que será enviado na requisição POST
  // Exemplo:
  userId: string;
  message: string;
}

export class TypebotService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://autoatendimento.salaosmart.com/api/v1/typebots/open-ai-conditions-0umblj8/startChat';
  }

  public async startChat(payload: ChatPayload): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.post(this.apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      // Lidando com o erro (pode personalizar de acordo com suas necessidades)
      throw new Error(`Failed to start chat: ${error.message}`);
    }
  }
}
