const understand = [
  ["set personal boundaries", "D"], ["protect your energy", "J"], ["stand your ground", "C"],
  ["know your worth", "G"], ["lend someone a hand", "F"], ["go beyond", "H"],
  ["people-pleasing", "I"], ["be tied up", "A"], ["weigh up the pros and cons", "E"], ["manipulate someone", "B"]
];
const definitions = {
  A: "to be too busy to do something",
  B: "to deliberately influence someone, often unfairly, to get what you want",
  C: "to refuse to change your position despite pressure from other people",
  D: "to establish limits concerning what you will and won’t accept",
  E: "to consider the advantages and disadvantages before making a decision",
  F: "to help somebody",
  G: "to recognise your own value",
  H: "to do more than is normally expected or required",
  I: "to constantly try to make other people happy, sometimes at your own expense",
  J: "to avoid using too much emotional or mental capacity on things that drain you"
};
const choose = [
  ["I spent years trying to ___ at work by accepting every extra task my manager gave me.", ["prove my worth", "prove your worth"]],
  ["If someone repeatedly makes jokes about something you’ve asked them not to mention, they’re ___.", ["crossing your boundaries", "crossing my boundaries", "crossing someone's boundaries"]],
  ["I’d love to come tonight, but I’m afraid I ___ with work until about nine.", ["am tied up", "'m tied up", "m tied up"]],
  ["You don’t have to agree with everyone just to be liked. Sometimes you need to ___.", ["stand up for yourself"]],
  ["Once you’ve said no, ___. Otherwise, people may assume they can persuade you to change your mind.", ["mean it"]],
  ["I’ve realised that constantly being available to everyone is exhausting. I need to ___ a little more.", ["protect my energy"]],
  ["If everything feels urgent, stop for a moment and ___. What actually needs your attention today?", ["set priorities"]],
  ["She offered to ___ with the move because she knew we had a lot to do.", ["lend a hand", "lend us a hand", "lend me a hand"]],
  ["Learning to ___ is difficult if you’re used to putting everyone else’s needs first.", ["say no without guilt"]],
  ["He kept making her feel guilty until she agreed. It felt like he was trying to ___ her.", ["manipulate"]],
  ["Sometimes ___ looks like kindness, but you’re actually agreeing to things because you’re afraid of disappointing people.", ["people-pleasing", "people pleasing"]],
  ["Even if your friends disagree with your decision, you should ___ if you genuinely believe it’s right.", ["stay true to yourself"]]
];
const collA = [["set", "personal boundaries"], ["enforce", "boundaries"], ["respect", "someone’s boundaries"], ["protect", "your energy"], ["prioritize", "your own well-being"], ["prove", "your worth"], ["know", "your worth"], ["weigh up", "the pros and cons"]];
const collOptions = ["your worth", "the pros and cons", "your energy", "boundaries", "your own well-being", "someone’s boundaries", "personal boundaries"];
const collB = [["stand ___ yourself", "for"], ["stay true ___ yourself", "to"], ["say no ___ guilt", "without"], ["lend someone ___ hand", "a"], ["go ___ what is expected", "beyond"], ["be tied ___ with work", "up"], ["It’s ___ to you.", "up"], ["stand your ___", "ground"]];
const retrieval = [
  ["Раньше мне казалось, что я должна постоянно доказывать свою ценность на работе.", "I used to feel that I constantly had to prove my worth at work."],
  ["Я учусь говорить «нет» без чувства вины, особенно когда у меня и так слишком много дел.", "I’m learning to say no without guilt, especially when I already have too much on my plate."],
  ["Если человек продолжает нарушать твои границы после того, как ты четко объяснил их, это уже проблема.", "If someone keeps crossing your boundaries after you’ve clearly explained them, that’s a problem."],
  ["Мне нужно сначала взвесить все за и против, прежде чем принимать решение.", "I need to weigh up the pros and cons before making a decision."],
  ["Боюсь, сегодня я очень занята, но завтра с удовольствием тебе помогу.", "I’m afraid I’m tied up today, but I’d be happy to lend you a hand tomorrow."],
  ["Тебе не нужно всем нравиться. Иногда важно просто оставаться верным себе.", "You don’t have to please everyone. Sometimes it’s important to stay true to yourself."],
  ["В последнее время я стараюсь больше беречь свои силы и ставить свое благополучие на первое место.", "Lately, I’ve been trying to protect my energy and prioritize my own well-being."],
  ["Она пыталась заставить меня почувствовать себя виноватой, но я настояла на своем.", "She tried to make me feel guilty, but I stood my ground."],
  ["Решать тебе. Я не хочу давить на тебя.", "It’s up to you. I don’t want to put any pressure on you."],
  ["Когда ты знаешь себе цену, тебе уже не так сильно нужно что-то доказывать другим.", "When you know your worth, you don’t feel such a strong need to prove yourself to other people."],
  ["Он всегда готов протянуть руку помощи и часто делает даже больше, чем от него ожидают.", "He’s always willing to lend a hand and often goes beyond what is expected of him."],
  ["Если ты говоришь «нет», говори это серьезно, иначе люди продолжат пытаться тебя переубедить.", "If you say no, mean it; otherwise, people will keep trying to change your mind."]
];
const situations = [
  "Your manager asks you to take on another task at 6 p.m., but your workload is already overwhelming. What do you say?",
  "A friend keeps asking why you don’t want to talk about your relationship, even though you’ve already said it’s private. How would you react?",
  "You have two job offers. One pays more, but the other would give you a much better work-life balance. Explain how you would make the decision.",
  "Your friend wants you to attend a party, but you’re exhausted and desperately need a quiet evening at home. They keep trying to convince you.",
  "Someone tells you, “If you really cared about me, you’d do this for me.” How would you describe what they’re doing?",
  "Your colleague is moving this weekend and clearly needs some help. You are free on Saturday morning. What could you offer?",
  "Everyone in your friend group has one opinion, but you genuinely disagree with them. What would you do?",
  "You’ve spent years agreeing to things you didn’t want to do because you were scared of disappointing people. What would you like to change?"
];
const personal = [
  "How easy is it for you to say no and mean it? What usually makes it difficult?",
  "In which situations is it especially important to set personal boundaries?",
  "Have you ever agreed to something because of people-pleasing and regretted it afterwards?",
  "What do you normally do to protect your energy when you’re extremely busy?",
  "When was the last time you had to weigh up the pros and cons of an important decision?",
  "Do you think people sometimes feel that they need to prove their worth at work or in relationships? Why?",
  "What does staying true to yourself mean to you in practice?",
  "What’s the difference between helping someone and going beyond what is reasonable?"
];
const challenge = [
  ["I need to <strong>decide what deserves my attention first</strong> instead of trying to do everything at once.", ["set priorities"]],
  ["She <strong>refused to change her decision</strong> even though everyone was putting pressure on her.", ["stood her ground", "stand her ground"]],
  ["You don’t need to <strong>constantly demonstrate that you’re valuable</strong>.", ["prove your worth", "prove yourself"]],
  ["He has <strong>absolutely no free time</strong> this afternoon.", ["is tied up", "be tied up", "tied up"]],
  ["She finds it difficult to refuse requests because she desperately wants everyone to like her.", ["people-pleasing", "people pleasing"]],
  ["Before I accept the offer, I want to <strong>carefully consider its advantages and disadvantages</strong>.", ["weigh up the pros and cons"]],
  ["<strong>It’s your decision</strong> — I don’t want to influence you.", ["it's up to you", "it is up to you"]],
  ["I need to stop sacrificing my mental health just to keep other people happy.", ["prioritize my own well-being", "protect my energy"]],
  ["She clearly told him <strong>what behaviour she would no longer accept</strong>.", ["set personal boundaries", "set boundaries"]],
  ["He <strong>ignored a limit</strong> that she had clearly communicated.", ["crossed her boundaries", "crossed a boundary", "crossed her boundary"]],
  ["I <strong>offered to help</strong> my colleague because she was completely overwhelmed.", ["offered to lend her a hand", "lend her a hand", "lent her a hand"]],
  ["Even under pressure, she <strong>refused to change her position</strong>.", ["stood her ground", "stand her ground"]]
];
const speaking = [
  ["“Being nice” vs having boundaries", "Some people find it extremely difficult to say no because they don’t want to disappoint others. Do you think being a kind person sometimes comes into conflict with protecting yourself? Where should we draw the line?"],
  ["The pressure to prove yourself", "Talk about a situation in which people may feel pressure to prove their worth — at work, university, in relationships or on social media. Why does this happen? What could a person do differently?"],
  ["A difficult decision", "Imagine you’ve been offered an exciting opportunity, but accepting it would mean sacrificing a lot of your free time and energy. Talk through your decision-making process and explain what you would choose."]
];

const normalise = value => value.toLowerCase().trim().replace(/[’‘]/g, "'").replace(/[.!?,;:]/g, "").replace(/\s+/g, " ");
const optionsHtml = (placeholder, options) => '<option value="">' + placeholder + '</option>' + options.map(([value, label]) => '<option value="' + value + '">' + label + '</option>').join("");

document.querySelector("#understandGrid").innerHTML = understand.map(([term, answer], i) =>
  '<label class="match-row"><span class="num">' + (i + 1) + '</span><strong>' + term + '</strong><select data-answer="' + answer + '" aria-label="Meaning of ' + term + '">' +
  optionsHtml("Choose a meaning", Object.entries(definitions).map(([key, text]) => [key, key + ". " + text])) + '</select></label>'
).join("");

document.querySelector("#chooseList").innerHTML = choose.map(([q, answers]) =>
  '<li><span>' + q + '</span><input type="text" data-answers="' + answers.join("|").replaceAll('"', "&quot;") + '" autocomplete="off" aria-label="Complete the sentence"></li>'
).join("");

document.querySelector("#collocationA").innerHTML = collA.map(([start, answer], i) =>
  '<label class="collocation-row"><span class="num">' + (i + 1) + '</span><strong>' + start + '</strong><select data-answer="' + answer + '" aria-label="Complete ' + start + '">' +
  optionsHtml("Choose", collOptions.map(x => [x, x])) + '</select></label>'
).join("");
document.querySelector("#collocationB").innerHTML = collB.map(([q, answer], i) =>
  '<label class="compact-row"><span class="num">' + (i + 1) + '</span><span>' + q + '</span><input type="text" data-answer="' + answer + '" aria-label="Complete ' + q.replace("___", "blank") + '"></label>'
).join("");

function openCards(target, items, models = null) {
  document.querySelector(target).innerHTML = items.map((item, i) => {
    const text = Array.isArray(item) ? item[0] : item;
    const model = models ? models[i] : (Array.isArray(item) ? item[1] : null);
    return '<article class="open-card"><header><span class="num">' + (i + 1) + '</span><p>' + text + '</p></header><textarea placeholder="Write your answer here…" aria-label="Answer ' + (i + 1) + '"></textarea>' +
      (model ? '<button class="reveal-btn" type="button">Reveal a model answer</button><p class="model-answer">' + model + '</p>' : '') + '</article>';
  }).join("");
}
openCards("#retrievalList", retrieval);
openCards("#situationList", situations);
openCards("#personalList", personal);

document.querySelector("#challengeList").innerHTML = challenge.map(([q, answers]) =>
  '<li><span>' + q + '</span><input type="text" data-answers="' + answers.join("|").replaceAll('"', "&quot;") + '" autocomplete="off" aria-label="Rewrite sentence"></li>'
).join("");
document.querySelector("#speakingList").innerHTML = speaking.map(([title, text], i) =>
  '<article class="speaking-card"><span class="num">' + (i + 1) + '</span><h3>' + title + '</h3><p>' + text + '</p><p class="use-note">Use at least 3 expressions from this week’s vocabulary.</p><textarea placeholder="Plan key words or ideas…" aria-label="Speaking notes for ' + title + '"></textarea></article>'
).join("");

function validate(container) {
  const fields = [...container.querySelectorAll("[data-answer], [data-answers]")];
  let correct = 0;
  fields.forEach(field => {
    const expected = field.dataset.answers ? field.dataset.answers.split("|") : [field.dataset.answer];
    const ok = expected.map(normalise).includes(normalise(field.value));
    field.classList.toggle("correct", ok);
    field.classList.toggle("incorrect", !ok);
    if (ok) correct++;
  });
  return [correct, fields.length];
}

document.querySelectorAll("[data-check]").forEach(button => button.addEventListener("click", () => {
  const key = button.dataset.check;
  const section = button.closest(".exercise");
  const [score, total] = validate(section);
  const result = document.querySelector("#" + key + "Result");
  result.textContent = score === total ? "Excellent — " + score + "/" + total + " correct." : score + "/" + total + " correct. Review the highlighted answers.";
  save();
}));
document.querySelectorAll("[data-reset]").forEach(button => button.addEventListener("click", () => {
  const section = button.closest(".exercise");
  section.querySelectorAll("input, textarea").forEach(el => { el.value = ""; el.classList.remove("correct", "incorrect"); });
  section.querySelectorAll("select").forEach(el => { el.value = ""; el.classList.remove("correct", "incorrect"); });
  const result = section.querySelector(".result");
  if (result) result.textContent = "";
  save();
}));
document.addEventListener("click", event => {
  if (!event.target.matches(".reveal-btn")) return;
  const answer = event.target.nextElementSibling;
  answer.classList.toggle("visible");
  event.target.textContent = answer.classList.contains("visible") ? "Hide model answer" : "Reveal a model answer";
});

const allFields = () => [...document.querySelectorAll("input[type='text'], textarea, select, input[type='checkbox']")];
function save() {
  const state = allFields().map(field => field.type === "checkbox" ? field.checked : field.value);
  localStorage.setItem("b2-boundaries-progress", JSON.stringify(state));
  updateProgress();
}
function restore() {
  try {
    const state = JSON.parse(localStorage.getItem("b2-boundaries-progress") || "[]");
    allFields().forEach((field, i) => {
      if (state[i] === undefined) return;
      if (field.type === "checkbox") field.checked = state[i];
      else field.value = state[i];
    });
  } catch (_) {}
  updateProgress();
}
function updateProgress() {
  const fields = allFields();
  const done = fields.filter(field => field.type === "checkbox" ? field.checked : field.value.trim()).length;
  const percent = Math.round(done / fields.length * 100);
  document.querySelector("#progressBar").style.width = percent + "%";
  document.querySelector("#progressLabel").textContent = percent + "% complete";
}
document.addEventListener("input", save);
document.addEventListener("change", save);
restore();
