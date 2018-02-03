MVC vs MVVM and component based architectures
* MVC stands for "Model View Controller".  
  * The model represents and manages the data, logic and rules of the application. It is responsible for the dynamic behavior of the application.
  * The view is essentially what the user sees. It is responsible for the layout of the content and to some extent the content itself.
  * The controller takes inputs either from the user or from the back end or another API and translates it into the model and ultimately the view.

* MVVM stands for "Model View ViewModel"
  * The model in in MVVM is essentially the same as it is in MVC.
  * The view in MVVM is similar to MVC but it is more a representation of the current state of the ViewModel.  The view is what the user sees.
  * The ViewModel takes the role of controller by taking and processing inputs from the user and updating the model it also takes inputs from the model and is responsible for the view logic.

* The idea of component-based architectures was introduced by React.js which is an MVVM framework.
  * components are small contained bits of the view or ViewModel which can update the DOM dynamically without reloading the entire page.
