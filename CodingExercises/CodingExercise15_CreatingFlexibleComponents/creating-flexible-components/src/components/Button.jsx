export default function Button({ children, className, mode = 'filled', Icon, ...props }) {
    // Todo: Build this component!

    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
    let cssClasses = `button ${mode}-button`;

    if (Icon) {
        cssClasses += ' icon-button';
    }

    if (className) {
        cssClasses += ' ' + className;
    }

    return (
        <button className={cssClasses} {...props}>
            {Icon && (
                <span className="button-icon">
                    <Icon />
                </span>
            )}
            <span>{children}</span>
        </button>
    );
}