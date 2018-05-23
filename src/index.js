import { Terminal } from 'web-termjs'
import * as terminalStyles from 'web-termjs/dist/terminal.css'

const container = document.createElement('div')
container.id = 'terminal'
document.body.appendChild(container)

const commands = {
  echo: {
    name: 'Nikola Spalevic',
    email: 'nikolaspalevic@gmail.com'
  },
  goto: {
    github: 'http://github.com/nikolasp',
    twitter: 'https://twitter.com/nikolaspalevic',
    linkedin: 'https://www.linkedin.com/in/nikola-spalevic-8220b1a9',
    stackoverflow: 'https://stackoverflow.com/users/6817082/nikola-spalevic'
  }
}

const echo = (stream, args) => {
  if (args.length === 0) {
    return
  }
  let cmdResult = commands.echo[args[0]]
  if (!cmdResult) {
    return
  }
  stream.write(cmdResult)
}

const goto = (args) => {
  let page = commands.goto[args[0]]
  if (!page) {
    return
  }
  window.open(page, '_blank')
}

new Terminal({
    welcome: 'Hi stranger! Type help to see more info! 😋',
    prompt: '',
    separator: '$guest',
    theme: 'dark'
}).openIn(container)
.onCommand((cmd, args, stream) => {
  if (cmd === 'help') {
    stream.write(`
      - 'echo name' will display full name <br/>
      - 'echo email' will display email <br/>
      - 'goto github' will open github page <br/>
      - 'goto twitter' will open twitter page <br/>
      - 'goto linkedin' will open linkedin page <br/>
      - 'goto stackoverflow' will open stackoverflow page <br/>
    `);
  }
  if (cmd === 'echo') {
    echo(stream, args)
  }
  if (cmd === 'goto') {
    goto(args)
  }
  stream.close()
})
