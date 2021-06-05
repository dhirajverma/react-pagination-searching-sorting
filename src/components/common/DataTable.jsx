import React, { useState, useEffect, useMemo } from 'react';
import { getMockLetterTemplatesData } from '../../services/mockTemplateService';
import useFullPageLoader from './../../utils/useFullPageLoader';
import Pagination from './../../utils/Pagination';
import Search from './../../utils/Search';
import _ from 'lodash';

function DataTable() {
  const [posts, setPosts] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const ITEM_PER_PAGE = 5;
  useEffect(() => {
    async function getAllPosts() {
      showLoader();
      const totalPosts = getMockLetterTemplatesData();
      hideLoader();
      setPosts(totalPosts);
    }
    getAllPosts();
    return () => {
      console.log('clean up code ');
    };
  }, []);

  const postsData = useMemo(() => {
    let computedPosts = posts;
    if (search) {
      computedPosts = computedPosts.filter(
        (post) =>
          post.facility.toLowerCase().includes(search.toLowerCase()) ||
          post.letterType.toLowerCase().includes(search.toLowerCase()) ||
          post.lastModifiedBy.toLowerCase().includes(search.toLowerCase()) ||
          post.lastModifiedOn.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setTotalItems(computedPosts.length);

    return computedPosts.slice(
      (currentPage - 1) * ITEM_PER_PAGE,
      (currentPage - 1) * ITEM_PER_PAGE + ITEM_PER_PAGE,
    );
  }, [posts, currentPage, search]);

  const handleDelete = (post) => {
    const postAfterDelete = posts.filter((p) => p.id !== post.id);
    setPosts(postAfterDelete);
  };

  const handleSort = (type) => {
    console.log('@handlesort type is : ', type);
    let sortedPost;
    let sortByType;
    if (!type.toLowerCase().match('select')) {
      if (type.toLowerCase().includes('asc')) {
        sortByType = type.slice(0, -3);
        sortedPost = _.orderBy(posts, [sortByType], ['asc']);
      } else if (type.toLowerCase().includes('desc')) {
        sortByType = type.slice(0, -4);
        sortedPost = _.orderBy(posts, [sortByType], ['desc']);
      }
      console.log('@sorted', sortedPost);
      setPosts(sortedPost);
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 d-flex flex-row-reverse">
        <h6>Total Templates: ({posts.length})</h6>
      </div>
      <br />
      <div className="col-md-2 d-flex flex-row-center">
        <Search
          onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />
      </div>
      <br />

      <div className="float-right">
        Sort by :
        <select className="searchBar" onChange={(e) => handleSort(e.target.value)}>
          <option value="select">Select</option>
          <option value="facilityAsc">Template Name (Ascending) </option>
          <option value="facilityDesc">Template Name (Decending) </option>
          <option value="letterTypeAsc">Letter Type (Ascending)</option>
          <option value="letterTypeDesc">Letter Type (Descending)</option>
          <option value="lastModifiedByAsc">Last Modified By (Ascending) </option>
          <option value="lastModifiedByDesc">Last Modified By (Decending) </option>
          <option value="lastModifiedOnAsc">Last Modified On (Ascending)</option>
          <option value="lastModifiedOnDesc">Last Modified On (Decending)</option>
        </select>
      </div>
      <br />

      <table className="table table-striped table-hover">
        <thead>
          {postsData
            ? postsData.map((post) => (
                <tr key={post.id}>
                  <td>{post.facility}</td>
                  <td>{post.letterType}</td>
                  <td>{post.lastModifiedBy}</td>
                  <td>{post.lastModifiedOn}</td>
                  <td>
                    <button onClick={() => handleDelete(post)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : { loader }}
        </thead>
      </table>
      <div className="d-flex justify-content-center">
        {posts.length > 0 ? (
          <Pagination
            total={totalItems}
            ItemsPerPage={ITEM_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
export default DataTable;
