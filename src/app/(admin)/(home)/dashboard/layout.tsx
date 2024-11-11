export default function DashboardLayout(props:{
  children: React.ReactNode;
    dashboardMetrics: React.ReactNode;
    recentSales: React.ReactNode;
    recentReviews: React.ReactNode;
    recentTransactions: React.ReactNode;
    checkAuth: React.ReactNode;
}) {
  const isLoginIn = true;
    console.log("isLoginIn:", isLoginIn);  
    console.log("loginCheck:", props.checkAuth);
  return (
<>
       {isLoginIn ? (
        <div id="home" className="p-5 overflow-x-hidden">
          {props.children}
          {props.dashboardMetrics}

          <div className="flex flex-wrap -mx-3 mt-8">
            {props.recentSales}
            {props.recentReviews}
            {props.recentTransactions}
          </div>
        </div>
      ) : (
        <div id="home" className="p-8 overflow-x-hidden">{props.checkAuth}</div>
      )}
    </>
  )
}