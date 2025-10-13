// No-op activator. The TS server plugin is wired via package.json.
// Activation is gated by workspaceContains:athena.ini.
function activate() {}
function deactivate() {}

module.exports = { activate, deactivate };
