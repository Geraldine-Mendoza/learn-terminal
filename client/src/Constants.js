 export const BASIC_INFO = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


export const BASH_INFO =
  'Bash is an sh -compatible command language interpreter that executes commands read from the standard input or from a file. Bash also incorporates useful features from the Korn and C shells ( ksh and csh ).';
export const GIT_INFO =
  'There are many different ways to use Git. Git supports many command-line tools and graphical user interfaces. The Git command line is the only place where you can run all the Git commands.';
export const TERMINAL_INFO = '';

export const BASH_INFO_MORE =
  'Different types of bash commands need to be run from the terminal based on the user’s requirements. When the user runs any command from the terminal then it shows the output if no error exists otherwise it shows the error message. Sometimes, the output of the command needs to be stored in a variable for future use. Shell command substitution feature of bash can be used for this purpose. ';
export const GIT_INFO_MORE =
  'There are a lot of different ways to use Git. There are the original command-line tools, and there are many graphical user interfaces of varying capabilities. For this book, we will be using Git on the command line. For one, the command line is the only place you can run all Git commands — most of the GUIs implement only a partial subset of Git functionality for simplicity.';

/* tutorial sections : bash */
const BASH_LEARN_1 = (
  <p>
    Let's start with some of the fundamental commands you need to know to start learning bash.
    First, we'll learn about directories.
    <br />
    You can make new directory using{' '}
    <code>
      mkdir {'<'}name of directory{'>'}
    </code>
    <br />
    Try making a directory called <code>myFirstDirectory</code> <br />
    So, the command would be <code>mkdir myFirstDirectory</code> <br />
    Making a directory is that simple! <br />
    Don't believe that you just created your first directory using base? <br />
    Try <code>ls</code> which lists the contents of the directory you are working in. You'll see
    that myFirstDirectory has been created.
    <br /> Now, wondering how to get inside the directory you just created? <br />
    It's easy as well just use the command{' '}
    <code>
      cd {'<'}name of directory{'>'}
    </code>
    <br />
    Lets create another directory called <code>removeMe</code> and learn about deleting or removing
    directories.
    <br />
    To delete an {`"`}Empty{`"`} directory use{' '}
    <code>
      rm {'<'}name of directory{'>'}
    </code>{' '}
    <br /> And <br />
    To delete an {`"`}Non-Empty{`"`} directory use{' '}
    <code>
      rm -rf {'<'}name of directory{'>'}
    </code>{' '}
  </p>
);
const BASH_LEARN_2 = (
  <p>
    Since, you have learnt about creating directories let us try creating files.
    <br />
    The easiest way is to use{' '}
    <code>
      touch {'<'}name of the file{'>'}.{'<'}extension{'>'}
    </code>{' '}
    command. <br />
    An empty file is hardly of any use, so lets learn about editing the contents of a file. Bash
    offers <code>vim</code> as the default editor. <br />
    So, to edit the files using <code>vim</code> editor, simple use the command <br />
    <code>
      vim {'<'}name of the file{'>'}.{'<'}extension{'>'}
    </code>{' '}
    <br />
    Now, After editing and saving your work you can view the contents of a file on the terminal
    using{' '}
    <code>
      cat {'<'}name of the file{'>'}.{'<'}extension{'>'}
    </code>{' '}
    <br />
    Nobody wants a clutter in their system so to delete the non-important files you can use{' '}
    <code>
      rm {'<'}name of the file{'>'}.{'<'}extension{'>'}
    </code>{' '}
    <br />
    Lets say, now you want to copy the file from one place to another. You can do that by using a
    simple command <br />
    <code>
      cp {'<'}name of the file{'>'} {'<'}path of the directory where you to copy it to{'>'}
    </code>
  </p>
);

export const BASH_LEARN = [BASH_LEARN_1, BASH_LEARN_2];

/* tutorial sections : git */
export const GIT_LEARN = [
  <p>
    Let's start learning git by using it locally. <br />
    Make a new folder using <code>mkdir myCoolFolder</code> <br />
    Go into the folder using <code>cd myCoolFolder</code> <br></br>
    Now to initialise the folder as a git repository use <code>git init</code> <br />
    You might want to clone a repository that you already have instead of making a new one for that
    you can use{' '}
    <code>
      git clone {'<'}url of repo{'>'}
    </code>{' '}
    <br />
    In order to successfully commit the changes first you need to add the files in the staging are
    by{' '}
    <code>
      git add {'<'}name of the file{'>'}
    </code>{' '}
    <br />
    Or <br />
    To add all the files we can use <code> git add * </code>
    <br />
    To commit the changes that we have made we use <br />
    <code>
      git commit -m {`"`}A message of your choice{`"`}
    </code>
    <br />
    Now, Finally you would like to push the changes to repo by using <code>git push</code>
  </p>,
];
