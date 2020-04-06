import Swal from 'sweetalert2';

export class AlertUtils{
    static showAlert({ icon, timer, title, text }){
        return Swal.fire({
            icon, title, text, timer
        })
    }

    static showConfirm({ title, text }){
        return Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
    }
}