#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use crate::commands::repo::{get_repositories, add_repository, select_repository, get_active_repository};
use crate::commands::files::*;
use crate::commands::emit_info;
use crate::context::Context;
use crate::settings::load_settings;

mod commands;
pub mod context;
pub mod error;
mod settings;
mod ipc;

fn main() {
  let settings = load_settings().expect("Failed to load settings");
  let context = Context::new(settings);

  tauri::Builder::default()
    .manage(context)
    .invoke_handler(tauri::generate_handler![get_repositories, add_repository, select_repository, get_active_repository, emit_info, get_all_files, read_file_by_hash, get_thumbnails, read_thumbnail])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
