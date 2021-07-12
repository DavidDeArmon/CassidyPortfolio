import React from "react";

class EmailForm extends React.Component {
    submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            }
        };
        xhr.send(data);
    }
    render() {
        window.onload = function() { 
            var el = document.getElementById('g-recaptcha-response'); 
            if (el) { 
              el.setAttribute('required', 'required'); 
            } 
          }
          
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xbjjnkkz"
                method="POST"
            >
                <div className="12u$(small)">
                    <div className="row uniform 50%">
                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li><br/>
                        <div className="g-recaptcha" data-sitekey="6LfSZo0bAAAAAFm6V7nx_s8rb5FNGDrHgP7tgaP4"></div>
                    </ul>
                </div>

            </form>
        );
    }

}
export default EmailForm