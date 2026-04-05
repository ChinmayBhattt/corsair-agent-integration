import Anthropic from '@anthropic-ai/sdk';
import { AnthropicProvider } from '@corsair-dev/mcp';
import { corsair } from './corsair.js';

async function main() {

    const provider = new AnthropicProvider();
    const tools = provider.build({ corsair });
    const client = new Anthropic();

     const message = await client.beta.messages.toolRunner({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        tools,
        messages: [{
            role: 'user',
            content: 'to fetch my account information on github',
        }],
    });
    for (const block of message.content) {
        if (block.type === 'text') console.log(block.text);
    }
}

main();