"use strict";
var RugOperation_1 = require("@atomist/rug/operations/RugOperation");
var Parameters_1 = require("./Parameters");
exports.createIssue = {
    description: "Create a GitHub issue",
    name: "CreateIssue",
    tags: ["atomist/intent=create issue", "atomist/private=false"],
    parameters: [
        { name: "title", description: "Issue Title", pattern: "^.*$", maxLength: 100, required: true },
        { name: "comment", description: "Issue Comment", pattern: "@any", maxLength: 100, required: true },
        Parameters_1.Owner, Parameters_1.Repository, Parameters_1.RepoUserToken
    ],
    execute: function (services, p) {
        var _services = services;
        var githubService = _services.github();
        var status = githubService.createIssue(p.title, p.comment, p.owner, p.repo, p.token);
        _services.messageBuilder().say(status.message()).send();
        if (status.success()) {
            return new RugOperation_1.Result(RugOperation_1.Status.Success, "OK");
        }
        else {
            return new RugOperation_1.Result(RugOperation_1.Status.Error, status.message());
        }
    }
};
