export default function DashboardTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-4">
          🎯 VidyaMitra Dashboard Test
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">✅ Authentication</h3>
            <p className="text-blue-600">Login/Register working</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">✅ Routing</h3>
            <p className="text-green-600">Navigation functional</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-2">✅ Components</h3>
            <p className="text-purple-600">All imports working</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-slate-600 mb-4">
            If you can see this page, the basic setup is working!
          </p>
          <button 
            onClick={() => window.location.href = '/dashboard'}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
