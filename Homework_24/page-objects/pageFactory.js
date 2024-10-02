import { Header } from './components/header';
import { SearchPopUp } from './searchPopUp'
import { ApiDescriptionPage } from './apiDescriptionPage';
import { LeftNavigationPanel } from './components/leftNavigationPanel';

class PageFactory {
  static "Header" = new Header();
  static "Search PopUp" = new SearchPopUp();
  static "Api Description Page" = new ApiDescriptionPage();
  static "Left Navigation Panel" = new LeftNavigationPanel();
}

export { PageFactory };