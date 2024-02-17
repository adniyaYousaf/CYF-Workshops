
test("Return a well formatted time string.", function () {
    const currentOutput = formatAsSecondsAsString(1)
    const targetOutput ="1 second";
    expect(currentOutput).toBe(targetOutput);
});

test("Return a well formatted time string.", function () {
    const currentOutput = formatAsSecondsAsString(6327894)
    const targetOutput ="1757 hours 44 minutes and 54 seconds";
    expect(currentOutput).toBe(targetOutput);
});

test("Return a well formatted time string.", function () {
    const currentOutput = formatAsSecondsAsString(632)
    const targetOutput ="10 minutes and 32 seconds";
    expect(currentOutput).toBe(targetOutput);
});

test("Return a well formatted time string.", function () {
    const currentOutput = formatAsSecondsAsString(61)
    const targetOutput ="1 minute and 1 second";
    expect(currentOutput).toBe(targetOutput);
});
test("Return a well formatted time string.", function () {
    const currentOutput = formatAsSecondsAsString(2394)
    const targetOutput ="39 minutes and 54 seconds";
    expect(currentOutput).toBe(targetOutput);
});