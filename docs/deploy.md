## How to deploy changes to Netlify

### Using Github

The humans application is being deployed through Netlify and is linked directly to the Github Repository.
Changes to data files should be pushed to the Github repository and a new build will be automatically deployed through Netlify.

### Getting started

1. Open a command prompt or console window
   On macOS you can search for `terminal` on the launchpad and then hit enter.
   On Windows you can type in `cmd` into the searchpad and hit enter to open a console window.

2. Choose a location where you want to store your folder in your storage drive and navigate to it on your console window
   Your directory should have a path to it such as `C:/Documents`.
   To access the directory, go into your storage drive, `C:/` by typing `C:` on windows or `cd /Volumes/C` on macOS.
   Then type `cd path` where `path` should be replaced with your path to the location.

3. Clone the repository so that you have a working copy of the humans application
   In your console window, type in `git clone https://github.com/Software-For-Love/humans.git` and a brand new folder should be created in your current directory.

The path to your humans folder will be used when making changes and updating the repository.

### Updating

Ensure that your folder is up to date with the repository when adding new changes.
This should be done every time you are making changes to the humans folder and have already pushed your previous changes to the repository.

1. Open a command prompt or console window
   On macOS you can search for `terminal` on the launchpad and then hit enter.
   On Windows you can type in `cmd` into the searchpad and hit enter to open a console window.

2. Navigate to the humans folder
   Your folder is located in a storage drive and should have a path to it such as `C:/Documents/humans`.
   To access the folder, go into your storage drive, `C:/` by typing `C:` on windows or `cd /Volumes/C` on macOS.
   Then type `cd path` where `path` should be replaced with your path to the humans folder.

3. Enter the command `git fetch` and then `git merge` on the command line
   If the folder merges successfully, you can add your changes with the steps to deployment.
   If conflicts exist then store your current humans folder inside a temporary folder and clone a new copy of the humans application with `git clone https://github.com/Software-For-Love/humans.git` inside the original directory and then add the changes you made previously to this new folder. The old folder can be deleted afterwards.

### Steps to deployment

1. Open a command prompt or console window

2. Navigate to the humans folder

3. Add any changes to the Github repository by entering `git add -A` on the command line

4. Commit all changes to the Github repository by entering `git commit -m "message"` on the command line 
where the `message` should just summarize the changes such as `added new featured people`.

5. Push the changes onto the main branch of the repository by entering `git push origin main`

### Revisions

You can repeat the steps above if any additional changes need to be made to an already committed and pushed entry.
Ensure that the humans folder remains updated.
