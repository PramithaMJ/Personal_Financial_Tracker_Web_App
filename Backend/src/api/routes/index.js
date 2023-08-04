const routesInit = (app, passport) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "/login",
  }), (req, res) => {
    console.log("User Authenticated");
    //  res.redirect("/");
  });
};

export default routesInit;
