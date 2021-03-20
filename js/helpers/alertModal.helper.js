export const launchModal = (title,text,icon,confirmButtonText = 'OK') => {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: confirmButtonText
        });
    };
