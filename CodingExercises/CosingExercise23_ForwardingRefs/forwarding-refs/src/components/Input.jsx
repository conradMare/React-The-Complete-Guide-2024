import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, ...props }, ref) {
    return (
        <p className="control">
            <label>{label}</label>
            <input ref={ref} {...props} />
        </p>
    );
});

export default Input;