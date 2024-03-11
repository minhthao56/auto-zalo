// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


#[tauri::command]
fn execute_command() {
  // Execute your desired command here
  let command_result = std::process::Command::new("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")
      .arg("--remote-debugging-port=9222")
      .arg("--user-data-dir=C:\\Users\\minht\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\TestUser")
      .output()
      .expect("Failed to execute command");

  println!("Command executed with result: {:?}", command_result);
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![execute_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
