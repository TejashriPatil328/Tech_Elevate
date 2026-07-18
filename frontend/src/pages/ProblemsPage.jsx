import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon, ArrowUpDownIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const initialProblems = Object.values(PROBLEMS);
  
  // Single state to manage the difficulty filter dropdown selection
  const [filterDifficulty, setFilterDifficulty] = useState("All"); // "All", "Easy", "Medium", "Hard"

  const easyProblemsCount = initialProblems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = initialProblems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = initialProblems.filter((p) => p.difficulty === "Hard").length;

  // Filter the problems array dynamically based on dropdown selection
  const displayProblems = initialProblems.filter((problem) => {
    if (filterDifficulty === "All") return true;
    return problem.difficulty === filterDifficulty;
  });

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER & DIFFICULTY DROPDOWN */}
        <div className="bg-base-100 rounded-xl p-6 border border-base-300 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-base-content mb-1">Practice Problems</h1>
            <p className="text-sm text-base-content/60">
              Sharpen your coding skills with these curated problems
            </p>
          </div>

          {/* Difficulty Filter Dropdown Container */}
          <div className="flex items-center gap-3 bg-base-200 px-4 py-2 rounded-lg border border-base-300 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2 text-base-content/70 text-sm font-medium">
              <ArrowUpDownIcon className="size-6" />
            </div>
            <select
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="select select-sm select-bordered bg-base-100 focus:outline-none focus:border-primary text-sm font-semibold min-w-[140px]"
            >
              <option value="All">All Problems</option>
              <option value="Easy">🟢 Easy</option>
              <option value="Medium">🟡 Medium</option>
              <option value="Hard">🔴 Hard</option>
            </select>
          </div>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {displayProblems.length > 0 ? (
            displayProblems.map((problem) => (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className="card bg-base-100 hover:scale-[1.01] transition-transform shadow-sm hover:shadow-md"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between gap-4">
                    {/* LEFT SIDE */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Code2Icon className="size-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold">{problem.title}</h2>
                            <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                              {problem.difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-base-content/60"> {problem.category}</p>
                        </div>
                      </div>
                      <p className="text-base-content/80 mb-3">{problem.description.text}</p>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-2 text-primary">
                      <span className="font-medium">Solve</span>
                      <ChevronRightIcon className="size-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 bg-base-100 rounded-xl shadow-sm border border-base-300">
              <p className="text-base-content/60 font-medium">No problems found for this category.</p>
            </div>
          )}
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal w-full">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">{initialProblems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;