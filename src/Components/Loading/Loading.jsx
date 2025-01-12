

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-2xl font-medium text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;