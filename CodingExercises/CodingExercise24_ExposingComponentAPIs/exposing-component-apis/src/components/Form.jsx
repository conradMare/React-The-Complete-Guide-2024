import { useRef, forwardRef, useImperativeHandle } from 'react';

const Form = forwardRef(function Form(props, ref) {
    const form = useRef();
    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current.reset();
            },
        };
    });

    return (
        <form ref={form}>
            <p>
                <label>Name</label>
                <input type="text" />
            </p>

            <p>
                <label>Email</label>
                <input type="email" />
            </p>
            <p id="actions">
                <button>Save</button>
            </p>
        </form>
    );
});

export default Form;