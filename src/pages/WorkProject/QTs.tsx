import { useState } from "react";
import { projectList } from "../../data/projectsList";
import ProjectHeader from "../../components/ProjectHeader";

import ApprovalFlow from "../../assets/Qts/ApprovalFlow.svg";
import ApprovalHistory from "../../assets/Qts/ApprovalHistory.png";
import ApproveFlowchart from "../../assets/Qts/ApproveFlowchart.png";
import FlowchartSnapshot from "../../assets/Qts/FlowchartSnapshot.png";
import RequestReview from "../../assets/Qts/RequestReview.png";
import StudentApproval from "../../assets/Qts/StudentApproval.png";
import EmailService from "../../assets/Qts/EmailService.png";
import StudentApprovalRequests from "../../assets/Qts/StudentApprovalRequests.png";

export default function QTs() {
  const [project] = useState(projectList[7]);

  return (
    <div className="w-full mb-[10%]">
      <ProjectHeader
        project={project}
        coverImg={project.coverImg}
        projectName={project.name}
        year={"September 2025 - December 2025"}
        role="Software Engineer"
        technologies={project.skillsUsed}
        description="Through the creation of this website, I helped students and advisors through the Quarter to Semester transition at Cal Poly."
      />
      <div className="flex flex-col px-[5%] md:px-[10%] lg:px-[20%]">
        <button
          className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5 mb-[5%]"
          onClick={() => window.open("https://www.polyplanner.pro/", "_blank")}
        >
          Test Demo
        </button>
        <div className="space-y-[5%] mt-[3%]">
          <section className="text-heading2 text-white font-bold">
            Preface
            <p className="text-body font-normal mt-[1%]">
              Cal Poly will be transitioning from a quarter based calendar to a
              semester based calendar beginning in Fall 2026. As a result, new
              students, transfer students, and students who are currently
              enrolled at Cal Poly will be going through the transition to
              semesters. The advisors and other administrators that will be
              assisting in this transition and in the future also need a tool
              that allows them to guide students through this transition and
              beyond.
              <br />
              Currently, there aren't any web-based curriculum planners that let
              students view course translation between quarter and semester
              freely, which is vital for students that want to meet their degree
              requirements in this transition period. Poly Planner Pro will
              provide clarity to students on their required courses and help
              alleviate advisor workload. Students can log in and plan the
              courses they need in order to graduate, send their custom
              flowchart to their advisor for approval, and ensure they will
              graduate on time. While Poly Planner Pro has a requirement
              validation feature that lets students know if they have met all
              requirements for graduation, advisors can also review, edit and
              leave notes on the student’s flowchart. Students should be able to
              request advisor help or approval of their flowcharts. Different
              admins tiers should have different levels of access, including a
              super admin that can remove lower tier admins and view what work
              they are completing at various milestones.
            </p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Goals
            <div className="text-body font-normal mt-[1%]">
              As an advisor, I want to view student’s schedules and be able to
              approve flowchart snapshots, so that I can support students with
              academic planning by providing tailored advice and feedback.
              <ul className="list-decimal ml-[4%]">
                <li className="mt-2">
                  Can see a list of students assigned to them that have
                  requested review + past students they have assisted
                </li>
                <li className="mt-2">
                  Can see list of all students in PolyPlannerPro
                </li>
                <li className="mt-2">
                  Can export degree requirements progress as PDF via print or
                  download
                </li>
                <li className="mt-2">Can look at starred flowchart for each</li>
                <li className="mt-2">
                  Can filter list of students by username, first name, last
                  name, major, email
                </li>
                <li className="mt-2">
                  Can sort students alphabetically (ascending and descending)
                </li>
              </ul>
            </div>
          </section>
          <section className="text-heading2 text-white font-bold">
            Approach
            <p className="text-body font-normal mt-[1%]">
              With the team, I mainly worked on the approval flow on the advisor
              side. Below is a swimlane chart which goes through the approval
              process from the stuednt to the advisor.
            </p>
            <img
              src={ApprovalFlow}
              alt="approvalFlowImg"
              className="w-full lg:w-1/2 mt-[2%]"
            />
          </section>
          <section className="text-heading2 text-white font-bold">
            Final Screens
            <h1 className="font-bold text-heading3">Request Approval</h1>
            <p className="text-body font-normal mt-[1%]">
              On the student side of the Poly Planner Pro, the student may
              request for an advisor review. In this pop-up they may select a
              specific advisor from the list or no advisor. If the student
              selects no advisor then the request will be mailed to the advisor
              email to the department. The student must select which flowchart,
              with an optional message to send to the advisor.
            </p>
            <img
              src={RequestReview}
              alt="requestReviewImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <h1 className="font-bold text-heading3">Viewing Approval Request</h1>
            <p className="text-body font-normal mt-[1%]">
              One issue that the team for saw, was advisors not checking
              requests in Poly Planner Pro. With all the separate platforms and
              responsibilities, Poly Planner Pro would simply be another task to
              check. So instead of having the request go unchecked within the
              website, the request is sent directly to the advisor via email. Of
              course, there is also a section for the advisors to check if they
              have any requests (see 2nd image).
            </p>
            <img
              src={EmailService}
              alt="emailServiceImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <img
              src={StudentApprovalRequests}
              alt="studentApprovalRequestsImg"
              className="w-full mb-[3%]"
            />
            <h1 className="font-bold text-heading3">
              Approving/Rejecting Flowchart
            </h1>
            <p className="text-body font-normal mt-[1%]"></p>
            <img
              src={ApproveFlowchart}
              alt="approveFlowchartImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <h1 className="font-bold text-heading3">
              Flowchart Approval History
            </h1>
            <p className="text-body font-normal mt-[1%]"></p>
            <img
              src={ApprovalHistory}
              alt="approvalHistoryImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <h1 className="font-bold text-heading3">Flowchart Snapshot</h1>
            <p className="text-body font-normal mt-[1%]"></p>
            <img
              src={FlowchartSnapshot}
              alt="flowchartSnapshotImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <h1 className="font-bold text-heading3">
              Checking on the Student Side
            </h1>
            <p className="text-body font-normal mt-[1%]"></p>
            <img
              src={StudentApproval}
              alt="studentApprovalImg"
              className="w-full mt-[2%] mb-[3%]"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
