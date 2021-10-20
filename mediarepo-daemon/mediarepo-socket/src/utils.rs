use crate::types::requests::FileIdentifier;
use mediarepo_core::error::{RepoError, RepoResult};
use mediarepo_core::rmp_ipc::ipc::context::Context;
use mediarepo_model::file::File;
use mediarepo_model::repo::Repo;
use mediarepo_model::type_keys::RepoKey;
use std::sync::Arc;

pub async fn get_repo_from_context(ctx: &Context) -> Arc<Repo> {
    let data = ctx.data.read().await;
    let repo = data.get::<RepoKey>().unwrap();
    Arc::clone(repo)
}

pub async fn file_by_identifier(identifier: FileIdentifier, repo: &Repo) -> RepoResult<File> {
    let file = match identifier {
        FileIdentifier::ID(id) => repo.file_by_id(id).await,
        FileIdentifier::Hash(hash) => repo.file_by_hash(hash).await,
    }?;
    file.ok_or_else(|| RepoError::from("Thumbnail not found"))
}