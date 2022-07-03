function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["passwort"].value;
  
      if ((x=="AstroAdmin23342") && (y=="220208") || (x=="TestPerson") && (y=="1234")) {
        alert("Du wirst zur Website weitergeleitet...");
        return true;
      } 
      else {
        alert("Falscher Username oder falsches Passwort!");
        return false;
      }
    }

		const menu_toggle = document.querySelector('.menu-toggle');
		const sidebar = document.querySelector('.sidebar');

		menu_toggle.addEventListener('click', () => {
			menu_toggle.classList.toggle('is-active');
			sidebar.classList.toggle('is-active');
		});
