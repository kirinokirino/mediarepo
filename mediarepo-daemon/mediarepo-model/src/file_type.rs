use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize, PartialOrd, PartialEq)]
pub enum FileType {
    Unknown = 0,
    Image = 1,
    Video = 2,
    Audio = 3,
}