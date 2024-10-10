# ghc-a11y-workshop-2024
Welcome to our A11y + Prompt Engineering workshop! Here you'll find our demo code. There are quite a few accessibility issues with this website. Can you use your new prompt engineering strategies to learn to fix them all?

Try it yourself: https://jsfiddle.net/Morgan123/0h5xypew/

## Prompt Engineering Strategies
1. Prime the chat. \
Example: Always respond using these requirements.

2. Give the AI assistant a role. \
Example: You are a web accessibility expert in charge of evaluating the accessibility of a website.

3. Define target audience. \
Example: Your target audience is the developers of the website.

4. Define requirements / give context. \
Example: The website must meet the AAA level of WCAG 2.2. Use reputable sources such as w3.org.

5. Sanity check the response. \
Be responsible: make sure you understand all of the code that you're writing. Be aware that AI can hallucinate.

## Popular AI Assistants 
- [Microsoft Copilot](copilot.microsoft.com)
- [OpenAI ChatGPT](chatgpt.com)
- [Google Gemini](gemini.google.com)
- [Anthropic Claude](https://claude.ai/)

## Challenges
### Challenge 1
Craft a prompt to improve color contrast
>```
> Given this css:
>
>body {
>background: #FCF1F0;
>font-family: Arial, sans-serif;
>}
>
>h1 {
>color: #F3A8BB;
>}
>
>#button {
>border-style: solid;
>padding: 5px;
>margin: 10px;
>text-decoration: none;
>background-color: #F6C1C9;
>width: 200px;
>}
>
>img {
>width: 50%;
>margin: 10px;
>}
>
>Evaluate this css for web accessibility, considering color blindness and visual impairment. Suggest changes to improve my website’s accessibility.
>```
### Challenge 2
Craft a prompt to add alternative text to the images on your website. 
>```
>Alt text is a concise description (up to 150 characters) that conveys the meaning of the image. Given this image, generate alt text.
>```

### Challenge 3
Write a prompt to improve keyboard accessibility. 
>```
>I will provide you with the HTML code of the website. Review it for keyboard accessibility and suggest improvements. 
>```
Copy and paste the HTML code into copilot. 
## URLs to our "broken" and "fixed" example websites
Broken: https://rmango.github.io/ghc-ai-a11y-workshop-2024/starter_code/ \
Fixed: https://rmango.github.io/ghc-ai-a11y-workshop-2024/solutions/

## Resources for Continued Learning

### Accessibility
- Free Conferences + Courses
  - [Deque's Axe-Con Free Conference Recordings](https://www.deque.com/axe-con/)
  - [Udacity Web Accessibility Course](https://www.udacity.com/course/web-accessibility--ud891)
  - [Google Accessibility Guide + Free Course](https://web.dev/accessible)
- Tools
  - [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - [Lighthouse for Chrome](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1)
- References
  - [ARIA Design Patterns (with examples)](https://www.w3.org/WAI/ARIA/apg/patterns/)
  - [MDN (Mozilla Developer Network) Web Accessibility References](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
  - [WCAG quick reference](https://www.w3.org/WAI/WCAG21/quickref/)

### Prompt Engineering
- [Github copilot blogpost](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/)
- [Prompt Engineering techniques](https://www.promptingguide.ai/techniques)
- [AWS prompt engineering guide](https://partyrock.aws/u/js2222/zEj353AmT/Prompt-Engineering-Guide-Introduction)
- [Google Cloud AI blogs](https://cloud.google.com/discover/?hl=en)
