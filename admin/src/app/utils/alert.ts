import Swal from 'sweetalert2';

export class AlertUtils{
    static showAlert({ icon, timer, title, text }){
        return Swal.fire({
            icon, title, text, timer
        })
    }
}