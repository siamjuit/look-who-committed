import { GitFork, Plus, GitCommit, GitPullRequest } from 'lucide-react';

export function HowToContribute() {
  const steps = [
    {
      icon: GitFork,
      title: 'Fork',
      description: 'Fork the repository on GitHub to create your own copy',
    },
    {
      icon: Plus,
      title: 'Add Your File',
      description: 'Create a JSON file named your_name_rollno.json in the users/ directory',
    },
    {
      icon: GitCommit,
      title: 'Commit',
      description: 'Commit your changes with a meaningful message',
    },
    {
      icon: GitPullRequest,
      title: 'Pull Request',
      description: 'Submit a pull request to have your profile added',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        How to Contribute
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Learning open source is easy! Follow these simple steps to add yourself to the showcase and learn Git workflow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-4 flex-shrink-0">
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">JSON Format:</h3>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto text-sm">
{`{
  "name": "Your Name",
  "rollno": "CS_[roll number]",
  "pokemon": "[your_pokemon_name] //Eg: pikachu, charizard etc.",
  "github": "https://github.com/your_github_username]",
  "linkedin": "https://www.linkedin.com/in/your_linkedin_username",
  "twitter": "https://twitter.com/your_twitter_username",
  "bio": "Your short bio goes here."
}
`}
        </pre>
        <p className="text-sm text-gray-600 mt-4">
          Save this file as <code className="bg-slate-100 px-2 py-1 rounded">your_name_rollno.json</code> in the <code className="bg-slate-100 px-2 py-1 rounded">users/</code> directory
        </p>
      </div>
    </div>
  );
}
