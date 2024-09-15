import { fees, pendingAssignments, averageAttendance } from './TuitionDashboard';
import 'styles.css';

export default function TuitionDashboard() {
  return (
    <div className="tuition-dashboard">
      <header className="header">
        <div className="header-content">
          <h1>Excellence Tuition Center</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="cards-wrapper">
          <div className="cards-grid">
            {/* Fees Card */}
            <Card>
              <CardHeader className="card-header">
                <CardTitle>Fees Management</CardTitle>
                <DollarSign />
              </CardHeader>
              <CardContent>
                <div className="card-value">${fees}</div>
                <p>Total fees collected this month</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/fees">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Homework Card */}
            <Card>
              <CardHeader className="card-header">
                <CardTitle>Homework Tracker</CardTitle>
                <BookOpen />
              </CardHeader>
              <CardContent>
                <div className="card-value">{pendingAssignments}</div>
                <p>Pending assignments</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/homework">View Details</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Student Attendance Card */}
            <Card>
              <CardHeader className="card-header">
                <CardTitle>Student Attendance</CardTitle>
                <Users />
              </CardHeader>
              <CardContent>
                <div className="card-value">{averageAttendance}%</div>
                <p>Average attendance this week</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/attendance">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content
