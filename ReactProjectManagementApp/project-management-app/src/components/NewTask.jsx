export default function NewTask() {
    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-300" />
            <button className="p-2 rounded-md bg-stone-500 text-stone-100 hover:text-stone-950">Add Task</button>
        </div>
    );
}