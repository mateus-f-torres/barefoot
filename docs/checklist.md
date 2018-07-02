https://mateus_f_torres@bitbucket.org/mateus_f_torres/template.git

// CodeEditor-----------------------------------------

CTAGS
install ctags to make/use tags like the ones in vim help

TREE
sudo apt-get install tree
  for visual tree of files in folder

VIM

vimrc
  with dotfiles in github repo

plugins
  auto-pairs
  lightline.vim
  onedark.vim
  vim-polyglot

for GUI support in Vim (Ctrl-c = "+y , Ctrl-v = "+p)
  sudo apt-get install libncurses5-dev libgnome2-dev libgnomeui-dev \
   libgtk2.0-dev libatk1.0-dev libbonoboui2-dev \
   libcairo2-dev libx11-dev libxpm-dev libxt-dev
  then inside .vim/vim/
  make distclean
  ./configure --with-features=huge --enable-gui=gnome2 --enable-cscope
  make
  sudo make install

Font Config
<http://input.fontbureau.com/download>.
	Four Style Family
		Regular: InputMonoNarrow-Light.ttf
		Italic: InputMonoNarrow-LightItalic.ttf
		Bold: InputMonoNarrow-Medium.ttf
		Bold Italic: InputMonoNarrow-MediumItalic.ttf

	Alternates
		--zero=slash

	Line Height: 1.2×

// Node and NPM update ---------------------------------------------

	https://github.com/creationix/nvm
	for node version automatic update script
	nvm install node
	nvm use node
	
	specific control
	nvm install [version]
	nvm alias default [version]

// Add Yarn for fast Package Managment -------------------------
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt-get update && sudo apt-get install yarn
  
  yarn add | upgrade | remove | script [module]
  no [module] will execute on ALL
  
  
https://mateus_f_torres@bitbucket.org/mateus_f_torres/template.git

quando quiser atualizar server.js
 babel ./server.js -o ./dev_server.js

setup ignores for .eslintignore and jest.config.js