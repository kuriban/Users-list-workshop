import initCreatePage from './create';
import initEditPage from './edit';
import initListPage from './list';

if (window.pageName){
	switch (pageName) {
		case 'edit':
			initEditPage();
		case 'list':
			initListPage();
		case 'create':
			initCreatePage();
	}
}
