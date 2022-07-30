'use babel';

import SitusSlotGacorGampangMenangTerbaruView from './situs-slot-gacor-gampang-menang-terbaru-view';
import { CompositeDisposable } from 'atom';

export default {

  situsSlotGacorGampangMenangTerbaruView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.situsSlotGacorGampangMenangTerbaruView = new SitusSlotGacorGampangMenangTerbaruView(state.situsSlotGacorGampangMenangTerbaruViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.situsSlotGacorGampangMenangTerbaruView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'situs-slot-gacor-gampang-menang-terbaru:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.situsSlotGacorGampangMenangTerbaruView.destroy();
  },

  serialize() {
    return {
      situsSlotGacorGampangMenangTerbaruViewState: this.situsSlotGacorGampangMenangTerbaruView.serialize()
    };
  },

  toggle() {
    console.log('SitusSlotGacorGampangMenangTerbaru was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
