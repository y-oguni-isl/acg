# Main Game Loop
1. Repeat a number of times proportional to the time elapsed since the previous frame:
   1. Spawn enemies
   2. Move enemies
   3. `onUpdate` event
   4. `onCollisionDetection` event
   5. Delete enemies
   6. Animate dead enemies
   7. Update the autopilot algorithm
   8. Tick the weather system
2. if not `powerSaveMode`:
   1. `onBeforeRender` event
   2. Move camera
   3. `onPreprocess` event
   4. render()
