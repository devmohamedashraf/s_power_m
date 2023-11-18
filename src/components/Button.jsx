

export default function Button({ className, children }) {
    return (
        <button className={`bg-primary text-primary-text text-lg px-6 py-2 rounded-full ${className}`}>{children}</button>
    );
};