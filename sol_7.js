function commonSkills(skills1, skills2) {
  const set2 = new Set(skills2.map(skill => skill.toLowerCase()));
  const common = new Set();

  for (const skill of skills1) {
    const normalized = skill.toLowerCase();

    if (set2.has(normalized)) {
      common.add(normalized);
    }
  }

  return [...common].sort();
}