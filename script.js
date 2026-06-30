const fs = require('fs');
let code = fs.readFileSync('app/application/page.tsx', 'utf8');

// 1. Funding text
code = code.replace('Between $5,000 and $500,000', 'Between $5,000 and $2,000,000');

// 2. Comment out Steps 4, 5, 6 in the steps array
code = code.replace('{ id: 4, title: "Documents", icon: FileText },', '// { id: 4, title: "Documents", icon: FileText },');
code = code.replace('{ id: 5, title: "Privacy", icon: ShieldCheck },', '// { id: 5, title: "Privacy", icon: ShieldCheck },');
code = code.replace('{ id: 6, title: "Submit", icon: Send },', '// { id: 6, title: "Submit", icon: Send },');

// 3. Comment out Step 4, 5, 6 UI
// We wrap currentStep 4, 5 and the review section of 6 in JSX comments.

code = code.replace('{/* ── Step 4: Documents ── */}', '{/* ── Step 4: Documents ── */}\n            {/*');
code = code.replace('{/* ── Step 5: Privacy ── */}', '*/}\n            {/* ── Step 5: Privacy ── */}\n            {/*');

// We also need to close the comment block before the Success block
code = code.replace('{/* ── Step 6: Review & Submit / Success ── */}', '*/}\n            {/* ── Step 6: Review & Submit / Success ── */}');

// The review block under step 6 is in a ternary:
const reviewStart = code.indexOf('currentStep === 6 && (\\n                <div className="my-8">');
if (reviewStart === -1) {
  // It might be formatted differently
  code = code.replace('currentStep === 6 && (', '/* currentStep === 6 && (');
  code = code.replace('                  </div>\\n                </div>\\n              )\\n            )}', '                  </div>\\n                </div>\\n              ) */ null\\n            )}');
} else {
  // fallback if needed
}

// Another way to comment the ternary:
code = code.replace(') : (\\n              currentStep === 6 && (', ') : (\\n              /* currentStep === 6 && (');
code = code.replace('              )\\n            )}\\n\\n            {/* ── Navigation ── */}', '              ) */ null\\n            )}\\n\\n            {/* ── Navigation ── */}');

// 4. Update Navigation logic
code = code.replace('if (currentStep < 6) setCurrentStep((s) => s + 1);', 'if (currentStep < 3) setCurrentStep((s) => s + 1);');
code = code.replace(') : currentStep === 6 ? (\\n                  <>\\n                    <Send size={16} />\\n                    Submit Application\\n                  </>', ') : currentStep === 3 ? (\\n                  <>\\n                    <Send size={16} />\\n                    Submit enquiry\\n                  </>');

fs.writeFileSync('app/application/page.tsx', code);
