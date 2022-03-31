## How to deploy changes to Netlify

### Using Github

The web application is being deployed through Netlify and is linked directly to the Github Repository.
Changes to data files should be pushed to the Github repository and a new build will be automatically deployed through Netlify.

### Updating

Ensure that your folder is up to date with the repository when adding new changes.

1. Open a command prompt or console window
   On macOS you can search for `terminal` on the launchpad and then open it
   On Windows you can type in `cmd` into the searchpad and open a console window

2. Navigate to the humans folder
   Your folder is located in a hard drive and should have a path to it such as `C:/Documents/humans`
   To access the folder, go into your hard drive, `C:/` by typing `cd C:/` and then type `cd path`
   where `path` should be replaced with your path to the humans folder

3. Enter the command `git fetch` and then `git merge` on the command line
If the folder merges successfully, you can add your changes with the steps to deployment
If conflicts exist then clone a new copy of the folder with `git clone https://github.com/Software-For-Love` and add the changes you made to this new folder

### Steps to deployment

1. Open a command prompt or console window

2. Navigate to the humans folder

3. Add any changes to the Github repository by entering `git add -A` on the command line

4. Commit all changes to the Github repository by entering `git commit -m "message"`  on the command line 
where the `message` should just summarize the changes such as `added new featured people`

5. Push the changes onto the main branch of the repository by entering `git push origin main`

### Revisions

You can repeat the steps above if any additional changes need to be made to an already committed and pushed entry.
Ensure that the folder remains updated.
