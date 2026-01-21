class Clawler {
  BASE_PATH = `https://antigravity.google`;
  DOCS_STRUCTURE = [
    {
      section: 'Home',
      path: 'home',
      slug: 'home',
    },
    {
      section: 'Home',
      path: 'home',
      slug: 'get-started',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'agent',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'models',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'agent-modes-settings',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'rules-workflows',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'skills',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'task-groups',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'browser-subagent',
    },
    {
      section: 'Agent',
      path: 'agent',
      slug: 'secure-mode',
    },
    {
      section: 'Tools',
      path: 'tools',
      slug: 'mcp',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'artifacts',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'task-list',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'implementation-plan',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'walkthrough',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'screenshots',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'browser-recordings',
    },
    {
      section: 'Artifacts',
      path: 'artifacts',
      slug: 'knowledge',
    },
    {
      section: 'Editor',
      path: 'editor',
      slug: 'editor',
    },
    {
      section: 'Editor',
      path: 'editor',
      slug: 'tab',
    },
    {
      section: 'Editor',
      path: 'editor',
      slug: 'command',
    },
    {
      section: 'Editor',
      path: 'editor',
      slug: 'agent-side-panel',
    },
    {
      section: 'Editor',
      path: 'editor',
      slug: 'review-changes-editor',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'agent-manager',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'workspaces',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'playground',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'inbox',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'conversation-view',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'browser-subagent-view',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'panes',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'review-changes-manager',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'changes-sidebar',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'terminal',
    },
    {
      section: 'Agent Manager',
      path: 'agent-manager',
      slug: 'files',
    },
    {
      section: 'Browser',
      path: 'browser',
      slug: 'browser',
    },
    {
      section: 'Browser',
      path: 'browser',
      slug: 'chrome-extension',
    },
    {
      section: 'Browser',
      path: 'browser',
      slug: 'allowlist-denylist',
    },
    {
      section: 'Browser',
      path: 'browser',
      slug: 'separate-chrome-profile',
    },
    {
      section: 'Plans',
      path: 'plans',
      slug: 'plans',
    },
    {
      section: 'Settings',
      path: 'settings',
      slug: 'settings',
    },
    {
      section: 'FAQ',
      path: 'faq',
      slug: 'faq',
    },
  ];
  constructor() {}
  getAllPage() {
    this.DOCS_STRUCTURE.forEach((d) => {
      this.getDocPage(d.slug);
    });
    console.log('FOLDER: '+ __dirname+'/docs');
  }
  async getDocPage(e) {
    console.log('SYNC: ' + e);
    let t = this.DOCS_STRUCTURE.find((i) => i.slug === e);
    if (!t) return (console.error(`Doc page slug not found: ${e}`), null);
    try {
      let i = await fetch(`${this.BASE_PATH}/assets/docs/${t.path}/${e}.md`);
      if (!i.ok) throw new Error(`HTTP error! status: ${i.status}`);
      let r = await i.text();
      // save into docs folder
      Bun.write(`./docs/${t.path}/${e}.md`, r);
    } catch (i) {
      return (console.error(`Error loading doc page ${e}:`, i), null);
    }
  }
}

const clawler = new Clawler();
clawler.getAllPage();
