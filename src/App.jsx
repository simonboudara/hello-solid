import "./style_css.css"
function App() {
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">test_git!</p>
      <ul>
      <br/>
        <li> the first bullet </li>
        <li> the second bullet </li>
      </ul>
      <br/>
      <p class="bg-green-600 text-center text-white hover:text-blue-300">Sometimes the separation between paragraphs is too much,
      
      <br/> and in this case you can insert a simple linebreak
            instead using the &amp;lt;br&amp;gt; tag
      </p>
      <br/>
      <p class="p-4 border-4 border-red-600">test_git!</p>
      <br/><p id="id1">for inserting code that should be kept as-is

<code><pre>
<br/>

import numpy as np
import matplotlib.pyplot as plt

X = np.linspace(-2*np.pi, 2*np.pi)
Y = np.sin(X)
plt.plot(X, Y)
</pre></code>
</p>
<br/> <br/>
<a href="https://www.google.com/" target="_" >that's google </a>
<a href="https://www.google.com" target="_">
link to google
</a>
<br/> <br/>
<h1 class="text-9xl text-black text-center "> toplevel title </h1>
<h2> first sublevel title </h2>
<h3> and so on </h3>
<h3> other subsublevel </h3>
<h2> second sublevel title </h2>
<div class="bg-blue-300 w-160 h-20"></div> 
    </div> 


  );
}

export default App;